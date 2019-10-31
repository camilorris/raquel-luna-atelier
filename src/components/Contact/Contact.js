import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as emailjs from "emailjs-com";

import ContactSchema from "./ContactSchema";
import styles from "./styles.module.scss";

const Contact = () => {
  const [messageSubmited, setMessageSubmited] = useState(false);

  if (messageSubmited) {
    return (
      <div className={styles.messageSubmited}>
        <h5>¡Tu mensaje ha sido enviado!</h5>
        <p>Nos comunicaremos contigo a la brevedad.</p>
      </div>
    );
  }
  const handleSubmit = fields => {
    const templateParams = {
      name: fields.name,
      email: fields.email,
      number: fields.number,
      dressType: fields.dressType,
      date: fields.date,
      contact: fields.contact
    };

    emailjs.send(
      "gmail",
      "raquel_atelier",
      templateParams,
      "user_L3bsWTtfiNJiMczYv4r3S"
    );

    setMessageSubmited(true);
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>Reserva tu cita</h2>
      <p>Envíanos tus datos y nos pondremos en contacto contigo</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          number: "",
          dressType: "",
          date: "",
          contact: ""
        }}
        isInitialValid={false}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
        render={({ isValid }) => {
          return (
            <Form>
              <div className={styles.personalInfo}>
                <div className={styles.field}>
                  <label htmlFor="name">Nombre completo*</label>
                  <Field id="name" name="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Correo electrónico*</label>
                  <Field name="email" id="email" type="email" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="number">Celular</label>
                  <Field name="number" id="number" type="number" />
                </div>
              </div>
              <div className={styles.extraInfo}>
                <div className={styles.field}>
                  <label htmlFor="dressType">Tipo de vestido</label>
                  <Field name="dressType" id="dressType" component="select">
                    <option value="">Seleccionar vestido</option>
                    <option value="Fiesta">Fiesta</option>
                    <option value="Dama de honor">Dama de Honor</option>
                    <option value="Novia">Novia</option>
                  </Field>
                </div>{" "}
                <div className={styles.field}>
                  <label htmlFor="date">Fecha del evento</label>
                  <Field
                    type="date"
                    name="date"
                    min="2019-10-28"
                    max="2021-12-31"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact">Preferencia de contacto</label>
                  <Field name="contact" id="contact" component="select">
                    <option value=""></option>
                    <option value="teléfono">Llamada</option>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="Correo">Correo</option>
                  </Field>
                </div>
              </div>
              <button disabled={!isValid} type="submit">
                Enviar
              </button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Contact;
