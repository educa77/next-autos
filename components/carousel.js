import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";

function Cards() {
  return (
    <div>
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
        <CardCarousel key={1}>
          <Card.Body>
            <img
              className="img-fluid"
              key={1}
              src="/assets/image_4.png"
              alt="/assets/image_4.png"
            />
            <CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipscing elit. Etiam
              eget.
            </CardTitle>
            {/* <p>{item.detail}</p> */}
          </Card.Body>
        </CardCarousel>
      </Carousel>
    </div>
  );
}

export default Cards;

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

const PaginationItem = styled.div`
  width: 8px;
  height: 8px;
  opacity: 0.5;
  background-color: #c5c5c5;
  opacity: 0.5;
  border-radius: 4px;
  margin-left: 25px;
  transition: all ease-out 0.4s;
  ${(props) => (props.active ? `background-color: #4a4a4a; width: 38px` : "")}
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
