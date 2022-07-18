import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import useNotify from 'hooks/useNotify';
import Button from 'components/Atoms/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles.module.scss';

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

const FormContact = () => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const [activeTarget, setActiveTarget] = useState({
    username: false,
    email: false,
    message: false,
  });
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    setActiveTarget((state) => ({
      ...state,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (e.target.value === '') {
      console.log(e.target.value);
      setActiveTarget((state) => ({
        ...state,
        [e.target.name]: false,
      }));
    }
  };

  const handleClick = () => {
    setLoading(true);
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode: string) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        emailjs.sendForm('service_6tucgh7', 'template_ex05dnc', form.current, 'MDfmR55yVZYpsAKKw')
          .then((result) => {
            setLoading(false);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useNotify('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
            console.log(result);
            reset();
          }, (error) => {
            setLoading(false);
            console.log(error);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useNotify('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
          });
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useNotify('error', error.message);
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <form
      ref={form}
      className="form"
      onSubmit={handleSubmit(handleClick)}
      onFocus={(e) => handleFocus(e)}
      onBlur={(e) => handleBlur(e)}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={recaptchaKey}
        onChange={onReCAPTCHAChange}
      />
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="username" className="form-label w-100 position-relative">
              <span className={`${styles.formLabel} ${activeTarget.username ? styles.activeLabel : ''}`}>
                Nombre
              </span>
              <input
                type="text"
                className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
                {...register('username', { required: true, maxLength: 20 })}
              />
              {errors.username && (
                <span className={styles.inputError}>
                  Por favor ingresa un nombre válido
                </span>
              )}
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="email" className="form-label w-100 position-relative">
              <span className={`${styles.formLabel} ${activeTarget.email ? styles.activeLabel : ''}`}>
                Email
              </span>
              <input
                type="email"
                className={`${styles.formInput} ${errors.email ? styles.formInputError : ''} form-control mt-2`}
                {...register('email', { required: true, maxLength: 20 })}
              />
              {errors.email && (
                <span className={styles.inputError}>
                  Por favor ingresa un email válido
                </span>
              )}
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel} ${activeTarget.message ? styles.activeLabel : ''}`}>
            Mensaje
          </span>
          <textarea
            className={`${styles.formTextArea} form-control mt-2`}
            rows={4}
            {...register('message')}
          />
        </label>
      </div>
      <div className="form-group">
        <Button
          className="btn btn-primary mt-4 text-uppercase py-2 px-4"
          text="Enviar"
          loading={loading}
          submit
        />
      </div>
    </form>
  );
};

export default FormContact;
