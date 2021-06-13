import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/Theme";
import Image from "next/image";
import Router from "next/router";
import Menu from "../components/menu";

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
            <li key={1}>
              <Link
                active={currentView === "Modelos"}
                onClick={() => Router.push("/")}
                key={1}
              >
                Modelos
              </Link>
            </li>
            <li key={2}>
              <Link
                active={currentView === "More"}
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
