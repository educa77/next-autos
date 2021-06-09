import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels, getOneModel } from "../../redux/actions";
import styled, { css } from "styled-components";
import Carousel from "../../components/carousel";
import MoreDetails from "../../components/moreDetails";

function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id, "id");

  const dispatch = useDispatch();

  const vehicle = useSelector((state) => state.models.model);

  const model = useMemo(() => vehicle);

  const modelfeatures = useMemo(() => model.model_features);

  const modelhighlights = useMemo(() => model.model_highlights);

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  useEffect(() => {
    if (id) dispatch(getOneModel(parseInt(id)));
  }, [id]);
  /* 
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  }); */

  return (
    <React.Fragment>
      {id !== undefined ? (
        <ModelDetails>
          <Container>
            <Row>
              {id === model.id && <Redirect to="/" />}
              <Col md={6}>
                <ImageMain
                  src={model.photo}
                  alt={"Imagen principal de " + model.name}
                />
              </Col>
              <Col md={6}>
                <ModelTitle>{model.name}</ModelTitle>
                <MainTitle>{model.title}</MainTitle>
                <ShortDescription>{model.description}</ShortDescription>
              </Col>
            </Row>
          </Container>
          <DetailsContent>
            <Carousel />
          </DetailsContent>
          {modelhighlights && <MoreDetails modelhighlights={modelhighlights} />}
        </ModelDetails>
      ) : (
        <PageTitleDetail>Elija un modelo</PageTitleDetail>
      )}
    </React.Fragment>
  );
}

export default ModelDetail;

const DetailsContent = styled.div`
  background-color: #f7f7f7;
  padding-top: 43px;
  padding-bottom: 50px;
  width: 100%;
  div {
    margin-top: 0;
  }
`;

const ImageMain = styled.img`
  transform: scaleX(-1);
  filter: FlipH;
  max-width: 100%;
  height: auto;
`;

const FontEgo = css`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const ModelTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: normal;
  margin-bottom: 8px;
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const ShortDescription = styled.p`
  max-width: 385px;
  font-size: 16px;
  font-weight: normal;
  ${FontEgo};
  line-height: 1.69;
  letter-spacing: -0.1px;
  margin-bottom: 87px;
`;

const MainTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  ${FontEgo};
  line-height: 1.14;
  letter-spacing: -1px;
  margin-bottom: 37px;
`;

const ModelDetails = styled.div`
  padding-top: 10%;
`;

const PageTitleDetail = styled.h2`
  ${FontEgo}
`;

ModelDetail.renderData = {
  currentView: "More",
};
