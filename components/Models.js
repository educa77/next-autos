import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllModels, getOrder } from "../redux/actions";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";

function Models() {
  const dispatch = useDispatch();

  const vehicles = useSelector((state) => state.models.models);
  const allsort = useSelector((state) => state.models.order);

  const models = useMemo(() => vehicles);
  const typeorder = useMemo(() => allsort.a);
  const wayorder = useMemo(() => allsort.b);

  const data = useMemo(() => {
    if (models) {
      if (typeorder === "price" && wayorder === "asc") {
        return models.sort((a, b) => (a.price < b.price ? -1 : 1));
      }
      if (typeorder === "price" && wayorder === "desc") {
        return models.sort((a, b) => (a.price > b.price ? -1 : 0));
      }
      if (typeorder === "year" && wayorder === "asc") {
        return models.sort((a, b) => (a.year < b.year ? -1 : 1));
      }
      if (typeorder === "year" && wayorder === "desc") {
        return models.sort((a, b) => (a.year > b.year ? -1 : 0));
      }
      if (typeorder === undefined) {
        return models;
      }
    }
  }, [typeorder, wayorder, models]);

  useEffect(() => {
    dispatch(getAllModels());
  }, [getOrder]);

  console.log(models, "models");

  return (
    <CardSpace>
      <CardContainer>
        {models &&
          models.map((item) => (
            <Card>
              <CardTextCenter>
                <CardText>{item.name}</CardText>
                <CardYearPrice>
                  {item.year} |{" "}
                  <CurrencyFormat
                    displayType="text"
                    decimalSeparator={","}
                    thousandSeparator={"."}
                    prefix={"$"}
                    value={item.price}
                  />
                </CardYearPrice>
                <a href={"/model/" + item.id}>
                  <CardImage
                    src={item.photo}
                    width="100%"
                    alt={"Imagen de: " + item.name}
                  />
                </a>
                <CardBtn href={`model/${item.id}`}>
                  <CardImgBtn
                    src="/images/negro-fill.svg"
                    width="100%"
                    alt="btn-ver-modelo"
                  />
                </CardBtn>
              </CardTextCenter>
            </Card>
          ))}
      </CardContainer>
    </CardSpace>
  );
}

export default Models;

const CardTextCenter = styled.div`
  width: 268px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBtn = styled.a`
  opacity: 0;
  transition: all 0.5s ease-in-out;
  &&:hover {
    opacity: 1;
  }
`;

const CardImage = styled.img`
  margin-top: -130px;
`;

const CardImgBtn = styled.img`
  opacity: 0;
  transition: all 0.5s ease-in-out;
  &&:hover {
    opacity: 1;
  }
`;

const CardText = styled.div`
  width: 268px;
  height: 30px;
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -0.65px;
  text-align: center;
  color: #000000;
  transition: all 0.5s ease-in-out;
`;

const CardYearPrice = styled.span`
  width: 268px;
  height: 18px;
  margin: 8px 1px 128px 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #191919;
`;

const CardSpace = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    grid-auto-rows: auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    grid-auto-rows: auto;
  }
`;

const Card = styled.div`
  &:hover {
    ${CardBtn} {
      opacity: 1;
    }
    ${CardImgBtn} {
      opacity: 1;
    }
    ${CardText} {
      color: #eb0a1e;
    }
  }
`;
