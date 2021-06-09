import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels, getOneModel } from "../../redux/actions";
import { Card } from "react-bootstrap";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";

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
            <Carousel
              renderArrow={myArrow}
              renderPagination={CustomPagination}
              itemsToShow={4}
              itemsToScroll={4}
              itemPosition={consts.CENTER}
              breakPoints={[
                { width: 500, itemsToShow: 1 },
                { width: 600, itemsToShow: 2 },
                { width: 800, itemsToShow: 3 },
                { width: 900, itemsToShow: 4 },
              ]}
            >
              {/*               {modelfeatures &&
                modelfeatures.map((item, index) => ( */}
              <CardCarousel key={1}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={1}
                    src="/assets/image_4.png"
                    alt="/assets/image_4.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>
              <CardCarousel key={2}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={2}
                    src="/assets/image_3.png"
                    alt="/assets/image_3.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>
              <CardCarousel key={3}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={3}
                    src="/assets/image_2.png"
                    alt="/assets/image_2.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>
              <CardCarousel key={4}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={4}
                    src="/assets/image.png"
                    alt="/assets/image.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>
              <CardCarousel key={5}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={4}
                    src="/assets/image_4.png"
                    alt="/assets/image_4.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>
              <CardCarousel key={6}>
                <Card.Body>
                  <img
                    className="img-fluid"
                    key={4}
                    src="/assets/image_3.png"
                    alt="/assets/image_3.png"
                  />
                  <CardTitle>
                    Lorem ipsum dolor sit amet, consectetur adipscing elit.
                    Etiam eget.
                  </CardTitle>
                  {/* <p>{item.detail}</p> */}
                </Card.Body>
              </CardCarousel>

              {/* ))} */}
            </Carousel>
          </DetailsContent>
          {modelhighlights && (
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
          )}
        </ModelDetails>
      ) : (
        <PageTitleDetail>Elija un modelo</PageTitleDetail>
      )}
    </React.Fragment>
  );
}

export default ModelDetail;

function CustomPagination({ pages, activePage, onClick }) {
  return (
    <div className="d-flex w-100 justify-content-center">
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <PaginationItem
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
          />
        );
      })}
    </div>
  );
}

function myArrow({ type, onClick, isEdge }) {
  const pointer =
    type === consts.PREV ? (
      <ArrowImage src="/images/arrow-left.svg" alt="" />
    ) : (
      <ArrowImage src="/images/arrow-right.svg" alt="" />
    );
  return (
    <ArrowContainer onClick={onClick} disabled={isEdge}>
      {pointer}
    </ArrowContainer>
  );
}

const PaginationItem = styled.div`
  width: 8px;
  height: 8px;
  opacity: 0.5;
  background-color: #c5c5c5;
  opacity: 0.5;
  border-radius: 4px;
  margin-left: 25px;
  transition: all ease-out 0.4s;
  &:active {
    width: 39px;
    background-color: #4a4a4a;
  }
`;

const ArrowContainer = styled.div`
  width: 45px;
  height: 146px;
  background-color: rgba(255, 255, 255, 0.56);
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  position: inline-block;
  top: 50%;
  margin-left: auto;
  width: 12px;
  height: 21px;
`;

const CardCarousel = styled(Card)`
  padding: 0px;
  width: 270px;
  margin-left: 11px;
  margin-right: 11px;
  border: none;
  background: transparent;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

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

const FontEgo = styled.h3`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const ModelTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  ${FontEgo};
  line-height: 1.35;
  letter-spacing: normal;
  margin-bottom: 8px;
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

const CardTitle = styled.h5`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.4px;
  color: #373737;
  margin-top: 20px;
  margin-bottom: 18px;
`;

const ModelDetails = styled.div`
  padding-top: 10%;
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

const PageTitleDetail = styled.h2`
  ${FontEgo}
`;

ModelDetail.renderData = {
  currentView: "More",
};
