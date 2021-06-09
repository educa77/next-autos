import styled, { css } from "styled-components";
import { colors } from "../styles/Theme";
import Image from "next/image";
import Router from "next/router";
import s from "../styles/navbar-ego.module.scss";

import React, { useState } from "react";

export default function Layout({ children, currentView }) {
  const [state, setState] = useState({
    menuToggled: false,
  });

  const handleMenu = (e) => {
    e.preventDefault();
    setState({
      ...state,
      menuToggled: !state.menuToggled,
    });
  };

  console.log("hola");

  return (
    <Container>
      <Header>
        <NavigationMenu>
          <Logo>
            <Image
              src="/images/logo.png"
              alt="Picture of the Agency"
              height={38}
              width={40}
              onClick={() => Router.push("/")}
            />
          </Logo>
          <NavHeader>
            <li>
              <Link
                active={currentView === "Modelos"}
                className={s["active"]}
                onClick={() => Router.push("/")}
                key={1}
              >
                Modelos
              </Link>
            </li>
            <li>
              <Link
                active={currentView === "More"}
                className={s["active"]}
                onClick={() => Router.push("/model/")}
                key={2}
              >
                Ficha de Modelos
              </Link>
            </li>
          </NavHeader>
        </NavigationMenu>
        <BotonMenu>
          <a to="/" onClick={handleMenu}>
            <span>Menú</span>
            <img src="/images/gray.svg" alt="Open menu" />
          </a>
        </BotonMenu>
        {<Menu handleToggle={handleMenu} show={state.menuToggled} />}
      </Header>

      <div className="divider" />
      <Content>
        {children}
        <Footer>
          <div className="wrapper"></div>
        </Footer>
      </Content>
    </Container>
  );
}

function Menu({ show, handleToggle }) {
  return (
    <div className={s["menu"] + (show ? " " + s["show"] : "")}>
      <ul>
        <li key={1}>
          <a href="/" onClick={handleToggle} className={s["btn-menu-close"]}>
            Cerrar
            <img src="/images/fill-1.png" alt="Close menu" />
          </a>
        </li>
      </ul>
      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/">Modelos</a>
          </li>
          <li key={2}>
            <a href="/">Servicios y Accesorios</a>
          </li>
          <li key={3}>
            <a href="/">Financiación</a>
          </li>
          <li key={4}>
            <a href="/">Reviews y Comunidad</a>
          </li>
        </ul>
      </div>

      <ul>
        <li key={1}>
          <a href="/">
            <hr />
          </a>
        </li>
      </ul>

      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/">Toyota Mobility Service</a>
          </li>
          <li key={2}>
            <a href="/">Toyota Gazoo Racing</a>
          </li>
          <li key={3}>
            <a href="/">Toyota Híbridos</a>
          </li>
        </ul>
      </div>

      <ul>
        <li key={1}>
          <a href="/">
            <hr />
          </a>
        </li>
      </ul>

      <div className={s["menu-tab"]}>
        <ul>
          <li key={1}>
            <a href="/">Concesionarios</a>
          </li>
          <li key={2}>
            <a href="/">Test Drive</a>
          </li>
          <li key={3}>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </div>

      <div className={s["menu-tab"] + " " + s["menu-tab-dark"]}>
        <ul>
          <li key={1}>
            <a href="/">Actividades</a>
          </li>
          <li key={2}>
            <a href="/">Servicios al Cliente</a>
          </li>
          <li key={3}>
            <a href="/">Ventas Especiales</a>
          </li>
          <li key={4}>
            <a href="/">Innovación</a>
          </li>
          <li key={5}>
            <a href="/">Prensa</a>
          </li>
          <li key={6}>
            <a href="/">Acerca de...</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const FontEgo = css`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const BotonMenu = styled.div`
  height: 100%;
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  ${FontEgo}
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-right: 8px;
    font-size: 14px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
    ${FontEgo}

    @media (max-width: 900px) {
      display: none;
    }
  }
`;
const Container = styled.div`
  display: block;
  height: 100%;
  margin: 0;
  min-height: 550px;
  min-width: 320px;
`;
const Header = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 70px;
  width: 100vw;
  position: fixed;
  z-index: 10;
  background: white;
  ${FontEgo}
`;
const NavigationMenu = styled.div`
  display: flex;
  flex: 0.9;
  height: 100%;
`;

const NavHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
const Content = styled.section`
  min-height: 100vh;
  padding-bottom: 50px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: ${colors.black};
`;

const Link = styled.a`
  display: inline-block;
  font-weight: 600;
  box-sizing: border-box;
  padding: 28px 40px 20px 31px;
  height: 100%;
  font-size: 14px;
  border-bottom: 4px solid transparent;
  transition: all ease-out 0.3s;
  outline-offset: -10px;
  color: #373737;
  &:hover,
  &:focus,
  &:active {
    border-color: #d0021b;
    text-decoration: none;
    color: #d0021b;
    font-weight: 600;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: #d0021b;
      text-decoration: none;
      color: #d0021b;
      font-weight: 600;
    `}
`;
const Logo = styled.div`
  margin: 17px 25px 0px 30px;
  cursor: pointer;
`;
