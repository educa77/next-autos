import { createGlobalStyle, css } from "styled-components";

import { colors, device } from "./Theme";

export const GlobalStyle = createGlobalStyle`

html {
    width: 100%;
    height: 100%; 
}
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: ${colors.black};
}
strong, 
.--strong {
    font-weight: 500;
}
sup {
    vertical-align: super;
    font-size: 8px;
}
button, a{
    cursor: pointer; 
}
/* Helpers */
.wrapper{
    width:100%;
    max-width: 1114px;
    margin:0 auto;
    @media(max-width: ${device.xl}){
        width:85vw;
    }
}
.divider{
    height:1px;
    background:${colors.lightGray};
    width:100%;
}
.dropdown-menu{
    border-radius: 0 0 10px 10px;
    border: none;
    box-shadow: 2px 8px 20px 0 rgba(0, 0, 0, 0.15);
    width: 170px;
    padding: 0px;
    margin-top: 12px;

    .dropdown-item{
        font-family: 'Montserrat';
        height: 37px;
        padding: 0 0 0 16px;
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 3.5;
        letter-spacing: -0.1px;
        color: #191919;
        border-bottom:1px solid rgba(0, 0, 0, 0.1);;
        &:last-child {
            border:none;
            border-radius: 0 0 10px 10px;
        }
        &:hover,
        &:active {
            background-color: rgba(209, 214, 214, 0.2);
        color: #191919;
        }
       
    }
    .dropdown-item.active{
        background-color: rgba(209, 214, 214, 0.2);
        color: #191919;
    }
      ${({ active }) =>
        active &&
        css`
          color: #373737;
          text-decoration: none;
          background: #f7f7f7;
          box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.69);
        `}
}

`;
