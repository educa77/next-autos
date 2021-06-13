import React from "react";
import s from "../styles/navbar-ego.module.scss";

function Menu({ show, handleToggle }) {
  return (
    <div className={s["menu"] + (show ? " " + s["show"] : "")}>
      <ul>
        <li key={1}>
          <a
            href="/"
            onClick={handleToggle}
            className={s["btn-menu-close"]}
            key={1}
          >
            Cerrar
            <img src="/images/fill-1.png" alt="Close menu" />
          </a>
        </li>
      </ul>
      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/" key={1}>
              Modelos
            </a>
          </li>
          <li key={2}>
            <a href="/" key={2}>
              Servicios y Accesorios
            </a>
          </li>
          <li key={3}>
            <a href="/" key={3}>
              Financiación
            </a>
          </li>
          <li key={4}>
            <a href="/" key={4}>
              Reviews y Comunidad
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li key={1}>
          <a href="/" key={1}>
            <hr />
          </a>
        </li>
      </ul>

      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/" key={1}>
              Toyota Mobility Service
            </a>
          </li>
          <li key={2}>
            <a href="/" key={2}>
              Toyota Gazoo Racing
            </a>
          </li>
          <li key={3}>
            <a href="/" key={3}>
              Toyota Híbridos
            </a>
          </li>
        </ul>
      </div>

      <ul>
        <li key={1}>
          <a href="/" key={1}>
            <hr />
          </a>
        </li>
      </ul>

      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/" key={1}>
              Concesionarios
            </a>
          </li>
          <li key={2}>
            <a href="/" key={2}>
              Test Drive
            </a>
          </li>
          <li key={3}>
            <a href="/" key={3}>
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <div className={s["menu-tab"] + " " + s["menu-tab-dark"]}>
        <ul>
          <li key={1}>
            <a href="/" key={1}>
              Actividades
            </a>
          </li>
          <li key={2}>
            <a href="/" key={2}>
              Servicios al Cliente
            </a>
          </li>
          <li key={3}>
            <a href="/" key={3}>
              Ventas Especiales
            </a>
          </li>
          <li key={4}>
            <a href="/" key={4}>
              Innovación
            </a>
          </li>
          <li key={5}>
            <a href="/" key={5}>
              Prensa
            </a>
          </li>
          <li key={6}>
            <a href="/" key={6}>
              Acerca de...
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
