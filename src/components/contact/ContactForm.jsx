import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendContactForm } from '../../services/contactService';
import { ArrowIcon } from '../ui/Icons';
import './ContactForm.css';

const initial = { name: '', email: '', company: '', message: '', consent: false, website: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Укажите имя';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Проверьте email';
  if (v.message.trim().length < 10) e.message = 'Расскажите чуть подробнее (от 10 символов)';
  if (!v.consent) e.consent = 'Нужно согласие на обработку данных';
  return e;
}

export default function ContactForm() {
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
        <span className="eyebrow">Сообщение отправлено</span>
        <p className="h-lg">
          Спасибо! Мы свяжемся с вами <span className="serif">в течение одного рабочего дня.</span>
        </p>
        <button className="btn" onClick={() => setStatus('idle')}>
          Отправить ещё
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
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <div className="cform__row">
        {field('name', 'Имя *', { autoComplete: 'name' })}
        {field('email', 'Email *', { type: 'email', autoComplete: 'email' })}
      </div>
      {field('company', 'Компания', { autoComplete: 'organization' })}
      {field('message', 'Расскажите о проекте *', { as: 'textarea' })}

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
          Я согласен(на) с <Link to="/privacy" className="link-line">политикой конфиденциальности</Link>
        </span>
      </label>
      {errors.consent && <span className="cform__error">{errors.consent}</span>}

      <div className="cform__submit">
        <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
          {status === 'sending' ? 'Отправляем…' : 'Отправить'} <ArrowIcon />
        </button>
        {status === 'error' && (
          <p className="cform__error" role="alert">
            Не удалось отправить. Попробуйте ещё раз или напишите нам на почту.
          </p>
        )}
      </div>
    </form>
  );
}
