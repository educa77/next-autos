import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllModels, getOrder } from "../redux/actions";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import s from "../styles/card.module.scss";

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

  return (
    <CardSpace>
      <CardContainer>
        {models &&
          models.map((item) => (
            <Card>
              <div className={s["card-text-center"]}>
                <div className={s["card-text"]}>{item.name}</div>
                <span className={s["card-year-price"]}>
                  {item.year} |{" "}
                  <CurrencyFormat
                    displayType="text"
                    decimalSeparator={","}
                    thousandSeparator={"."}
                    prefix={"$"}
                    value={item.price}
                    className={s["card-currency"]}
                  />
                </span>
                <a href={"/model/" + item.id}>
                  <img
                    src={item.photo}
                    width="100%"
                    alt={"Imagen de: " + item.name}
                    className={s["card-image"]}
                  />
                </a>
                <a href={"/model/" + item.id} className={s["card-btn"]}>
                  <img
                    src="/images/negro-fill.svg"
                    width="100%"
                    alt="btn-ver-modelo"
                    className={s["card-btn"]}
                  />
                </a>
              </div>
            </Card>
          ))}
      </CardContainer>
    </CardSpace>
  );
}

export default Models;

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

const Card = styled.div``;
