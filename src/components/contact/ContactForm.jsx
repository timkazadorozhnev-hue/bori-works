import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { sendContactForm } from '../../services/contactService';
import { ArrowIcon } from '../ui/Icons';
import './ContactForm.css';

const initial = { name: '', email: '', company: '', message: '', consent: false, website: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Возвращает поля с ошибками; тексты сообщений — в словаре (t.form.errors). */
function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = true;
  if (!EMAIL_RE.test(v.email.trim())) e.email = true;
  if (v.message.trim().length < 10) e.message = true;
  if (!v.consent) e.consent = true;
  return e;
}

export default function ContactForm() {
  const { t, lp } = useLang();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot против спам-ботов
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('sending');
    try {
      const { name, email, company, message } = values;
      await sendContactForm({ name: name.trim(), email: email.trim(), company: company.trim(), message: message.trim() });
      setStatus('success');
      setValues(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="cform__success" role="status">
        <span className="eyebrow">{t.form.sentEyebrow}</span>
        <p className="h-lg">
          {t.form.sentText[0]} <span className="serif">{t.form.sentText[1]}</span>
        </p>
        <button className="btn" onClick={() => setStatus('idle')}>
          {t.form.sendMore}
        </button>
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div className={`cform__field ${errors[name] ? 'has-error' : ''}`}>
      {props.as === 'textarea' ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          placeholder=" "
          rows={4}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={props.type || 'text'}
          value={values[name]}
          onChange={onChange}
          placeholder=" "
          autoComplete={props.autoComplete}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
        />
      )}
      <label htmlFor={`cf-${name}`}>{label}</label>
      {errors[name] && (
        <span className="cform__error" id={`cf-${name}-err`}>
          {t.form.errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="cform__row">
        {field('name', t.form.name, { autoComplete: 'name' })}
        {field('email', t.form.email, { type: 'email', autoComplete: 'email' })}
      </div>
      {field('company', t.form.company, { autoComplete: 'organization' })}
      {field('message', t.form.message, { as: 'textarea' })}

      {/* Скрытое поле-ловушка для ботов */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        className="visually-hidden"
        aria-hidden="true"
      />

      <label className={`cform__consent ${errors.consent ? 'has-error' : ''}`}>
        <input type="checkbox" name="consent" checked={values.consent} onChange={onChange} />
        <span className="cform__check" aria-hidden="true" />
        <span>
          {t.form.consent[0]}
          <Link to={lp('/privacy')} className="link-line">
            {t.form.consent[1]}
          </Link>
          {t.form.consent[2]}
        </span>
      </label>
      {errors.consent && <span className="cform__error">{t.form.errors.consent}</span>}

      <div className="cform__submit">
        <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
          {status === 'sending' ? t.form.sending : t.form.send} <ArrowIcon />
        </button>
        {status === 'error' && (
          <p className="cform__error" role="alert">
            {t.form.sendError}
          </p>
        )}
      </div>
    </form>
  );
}
