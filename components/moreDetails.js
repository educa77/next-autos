import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";

function MoreDetails({ modelhighlights }) {
  return (
    <>
      <ContainerTwo>
        <First>
          <React.Fragment>
            <Col md={6}>
              <DetailContainer>
                <Title>{modelhighlights[0].title}</Title>
                <Description>{modelhighlights[0].content}</Description>
              </DetailContainer>
            </Col>
            <Col className="my-4" md={6}>
              <img
                /* src={modelhighlights[0].image} */
                src="/assets/3.png"
                className="img-fluid rounded"
                alt={"Imagen de " + "./assets/3.png"}
              />
            </Col>
          </React.Fragment>
        </First>
        <Second>
          <React.Fragment>
            <Col className="my-4" md={6}>
              <img
                /* src={modelhighlights[1].image} */
                src="/assets/1.png"
                className="img-fluid rounded"
                alt={"Imagen de " + "/assets/1.png"}
              />
            </Col>
            <Col md={6}>
              <DetailContainer>
                <Title>{modelhighlights[1].title}</Title>
                <Description>{modelhighlights[1].content}</Description>
              </DetailContainer>
            </Col>
          </React.Fragment>
        </Second>
      </ContainerTwo>
    </>
  );
}

export default MoreDetails;

const FontEgo = styled.h3`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const First = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Second = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const DetailContainer = styled.div`
  max-width: 385px;
  margin: auto;
`;

const Title = styled(FontEgo)`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.4px;
  margin-bottom: 13px;
`;

const Description = styled(FontEgo)`
  font-size: 16px;
  line-height: 1.69;
  letter-spacing: -0.1px;
  margin-bottom: 0;
`;
