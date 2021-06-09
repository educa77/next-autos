import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels, getOneModel } from "../../redux/actions";
import { Card } from "react-bootstrap";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
import s from "../../styles/model.module.scss";

function ModelDetail() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const vehicle = useSelector((state) => state.models.model);

  const model = useMemo(() => vehicle);

  const modelfeatures = useMemo(() => model.model_features);

  const modelhighlights = useMemo(() => model.model_highlights);

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneModel(parseInt(id)));
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
                <img
                  className={"img-fluid " + s["img-main"]}
                  src={model.photo}
                  alt={"Imagen principal de " + model.name}
                />
              </Col>
              <Col md={6}>
                <h2 className={s["model-title"]}>{model.name}</h2>
                <h1 className={s["main-title"]}>{model.title}</h1>
                <p className={s["short-description"]}>{model.description}</p>
              </Col>
            </Row>
          </Container>
          <div className={s["details-content"]}>
            <Carousel
              renderArrow={myArrow}
              renderPagination={CustomPagination}
              itemsToShow={4}
              itemsToScroll={1}
              itemPosition={consts.CENTER}
              breakPoints={[
                { width: 500, itemsToShow: 1 },
                { width: 600, itemsToShow: 2 },
                { width: 800, itemsToShow: 3 },
                { width: 900, itemsToShow: 4 },
              ]}
            >
              {modelfeatures &&
                modelfeatures.map((item, index) => (
                  <Card
                    key={index}
                    className={s["card-carousel"] + " border-0 bg-transparent"}
                  >
                    <Card.Body>
                      <img
                        className="img-fluid"
                        key={item.id}
                        src={item.photo}
                        alt=""
                      />
                      <h5 className={s["card-title"]}>{item.description}</h5>
                      <p>{item.detail}</p>
                    </Card.Body>
                  </Card>
                ))}
            </Carousel>
          </div>
          {modelhighlights && (
            <div className={s["container"]}>
              <div className={s["first"]}>
                <React.Fragment>
                  <Col md={6}>
                    <div className={s["details-container"]}>
                      <h3 className={s["title"]}>{modelhighlights[0].title}</h3>
                      <p className={s["description"]}>
                        {modelhighlights[0].content}
                      </p>
                    </div>
                  </Col>
                  <Col className="my-4" md={6}>
                    <img
                      src={modelhighlights[0].image}
                      className="img-fluid rounded"
                      alt={"Imagen de " + modelhighlights[0].image}
                    />
                  </Col>
                </React.Fragment>
              </div>
              <div className={s["second"]}>
                <React.Fragment>
                  <Col className="my-4" md={6}>
                    <img
                      src={modelhighlights[1].image}
                      className="img-fluid rounded"
                      alt={"Imagen de " + modelhighlights[1].title}
                    />
                  </Col>
                  <Col md={6}>
                    <div className={s["details-container"]}>
                      <h3 className={s["title"]}>{modelhighlights[1].title}</h3>
                      <p className={s["description"]}>
                        {modelhighlights[1].content}
                      </p>
                    </div>
                  </Col>
                </React.Fragment>
              </div>
            </div>
          )}
        </ModelDetails>
      ) : (
        <h1 className={s["page-title-detail"]}>Elija un modelo</h1>
      )}
    </React.Fragment>
  );
}

export default ModelDetail;

function CustomPagination() {
  const pages = [2];
  const activePage = 1;

  const onClick = () => {};

  return (
    <div className="d-flex w-100 justify-content-center">
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <div
            className={
              s["pagination-item"] + (isActivePage ? " " + s["active"] : "")
            }
            key={page}
            onClick={() => onClick(page)}
          />
        );
      })}
    </div>
  );
}

function myArrow({ type, onClick, isEdge }) {
  const pointer =
    type === consts.PREV ? (
      <img className={s["arrow-image"]} src="/images/arrow-left.svg" alt="" />
    ) : (
      <img className={s["arrow-image"]} src="/images/arrow-right.svg" alt="" />
    );
  return (
    <div className={s["arrow-container"]} onClick={onClick} disabled={isEdge}>
      {pointer}
    </div>
  );
}

const ModelDetails = styled.div`
  padding-top: 10%;
`;

ModelDetail.renderData = {
  currentView: "More",
};
