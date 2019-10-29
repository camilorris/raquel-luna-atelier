import React, { useState } from "react";

import styles from "./styles.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dress, setDress] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  return (
    <div className={styles.contactContainer}>
      <h2>Reserva tu cita</h2>
      <p>Envíanos tus datos y nos pondremos en contacto contigo</p>
      <form action="">
        <div className={styles.personalInfo}>
          <div className={styles.field}>
            <label htmlFor="name">Nombre completo*</label>{" "}
            <input
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              id="name"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Correo electrónico*</label>
            <input
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              id="email"
              type="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="number">Celular</label>
            <input
              value={number}
              onChange={e => {
                setNumber(e.target.value);
              }}
              id="number"
              type="number"
            />
          </div>
        </div>
        <div className={styles.extraInfo}>
          <div className={styles.field}>
            <label htmlFor="dressType">Tipo de vestido</label>{" "}
            <select
              value={dress}
              onChange={e => {
                setDress(e.target.value);
              }}
              name="dressType"
              id="dressType"
            >
              <option value="">Seleccionar vestido</option>
              <option value="Fiesta">Fiesta</option>
              <option value="Dama de honor">Dama de Honor</option>
              <option value="Novia">Novia</option>
            </select>
          </div>{" "}
          <div className={styles.field}>
            <label htmlFor="date">Fecha del evento</label>
            <input
              value={date}
              onChange={e => {
                setDate(e.target.value);
              }}
              type="date"
              name="evento"
              min="2019-10-28"
              max="2021-12-31"
            ></input>
          </div>
          <div className={styles.field}>
            <label htmlFor="contact">Preferencia de contacto</label>
            <select
              value={contact}
              onChange={e => {
                setContact(e.target.value);
              }}
              name="contact"
              id="contact"
            >
              <option value=""></option>
              <option value="teléfono">Llamada</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Correo">Correo</option>
            </select>
          </div>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
