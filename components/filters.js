import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import s from "../styles/filters.module.scss";
import styled, { css } from "styled-components";
import {
  getAllAutos,
  getAllModels,
  getAllSuvs,
  getAllPickups,
  getOrder,
} from "../redux/actions";

function Filters() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    dropdownToggled: false,
    dropdownToggledFilter: false,
    activo: null,
  });

  const [orden, setOrden] = useState({
    orderBy: "id",
    orderDirection: "asc",
  });

  const [filtro, setFiltro] = useState({});

  const handleToggle = (show) => {
    setState({
      ...state,
      dropdownToggled: show,
    });
  };

  const handleToggleFilter = (show) => {
    setState({
      ...state,
      dropdownToggledFilter: show,
    });
  };

  const handleVehicles = (category) => {
    return (e) => {
      e.preventDefault();
      if (category === "Autos") {
        dispatch(getAllAutos());
        setState({
          ...state,
          activo: category,
        });
        setFiltro({ filtro: category });
      }
      if (category === null) {
        dispatch(getAllModels());
        setState({
          ...state,
          activo: category,
        });
        setFiltro({ filtro: category });
      }
      if (category === "Pickups y Comerciales") {
        dispatch(getAllPickups());
        setState({
          ...state,
          activo: category,
        });
        setFiltro({ filtro: category });
      }
      if (category === "SUVs y Crossovers") {
        dispatch(getAllSuvs());
        setState({
          ...state,
          activo: category,
        });
        setFiltro({ filtro: category });
      }
    };
  };

  const handleOrder = (a, b) => {
    return (e) => {
      console.log(a, b);
      e.preventDefault();
      if (a && b) {
        setOrden({
          orderBy: a,
          orderDirection: b,
        });
        dispatch(getOrder(a, b));
      }
    };
  };

  useEffect(() => {
    dispatch(getAllModels());
  }, [dispatch]);

  const vehicles = [
    { name: "Autos" },
    { name: "Pickups y Comerciales" },
    { name: "SUVs y Crossovers" },
  ];

  return (
    <FilterNav>
      <FilterBy>
        <Dropdown alignRight className="mr-auto" onToggle={handleToggleFilter}>
          <Dropdown.Toggle as={CustomToggleFilter}>
            Filtrar por
            <img
              src="/images/fill-1.svg"
              alt="Flecha dropdown"
              className={
                s["Fill-1"] +
                (state.dropdownToggledFilter ? " " + s["active"] : "")
              }
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={handleVehicles(null)}
              eventKey="1"
              active={filtro.filtro === null}
            >
              Todos
            </Dropdown.Item>
            {vehicles.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={handleVehicles(item.name)}
                eventKey={"" + (index + 2)}
                active={filtro.filtro === item.name}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <DeskTopFilter>
          <span className={s["filter-title"]}>Filtrar por</span>
          <Link
            href="/"
            onClick={handleVehicles(null)}
            active={state.activo === null}
            eventKey="1"
          >
            Todos
          </Link>
          {vehicles.map((item, index) => (
            <Link
              href="/"
              key={item.id}
              onClick={handleVehicles(item.name)}
              eventKey={"" + (index + 2)}
              active={state.activo === item.name}
            >
              {item.name}
            </Link>
          ))}
        </DeskTopFilter>
      </FilterBy>
      <FilterOrder>
        <Dropdown alignRight className="mr-auto" onToggle={handleToggle}>
          <Dropdown.Toggle as={CustomToggle}>
            Ordernar por
            <img
              src="/images/fill-1.svg"
              alt="Flecha dropdown"
              className={
                s["Fill-1"] + (state.dropdownToggled ? " " + s["active"] : "")
              }
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              active={orden.orderBy === "id" && orden.orderDirection === "asc"}
              onClick={handleOrder("id", "asc")}
              eventKey="1"
            >
              Nada
            </Dropdown.Item>
            <Dropdown.Item
              active={
                orden.orderBy === "price" && orden.orderDirection === "asc"
              }
              onClick={handleOrder("price", "asc")}
              eventKey="2"
            >
              De <span>menor</span> a <span>mayor</span> precio
            </Dropdown.Item>
            <Dropdown.Item
              active={
                orden.orderBy === "price" && orden.orderDirection === "desc"
              }
              onClick={handleOrder("price", "desc")}
              eventKey="3"
            >
              De <span>mayor</span> a <span>menor</span> precio
            </Dropdown.Item>
            <Dropdown.Item
              active={
                orden.orderBy === "year" && orden.orderDirection === "desc"
              }
              onClick={handleOrder("year", "desc")}
              eventKey="4"
            >
              Más <span>nuevos</span> primero
            </Dropdown.Item>
            <Dropdown.Item
              active={
                orden.orderBy === "year" && orden.orderDirection === "asc"
              }
              onClick={handleOrder("year", "asc")}
              eventKey="5"
            >
              Más <span>viejos</span> primero
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </FilterOrder>
    </FilterNav>
  );
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className={s["filter-title"] + " " + s["filter-title-right"]}
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const CustomToggleFilter = React.forwardRef(({ children, onClick }, ref) => (
  <a
    className={s["filter-title"] + " " + s["filter-title-left"]}
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

export default Filters;

const FontEgo = css`
  font-stretch: normal;
  font-style: normal;
  color: #373737;
  font-family: "Montserrat";
`;

const FilterNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 28px;
  ${FontEgo}
`;

const FilterBy = styled.div`
  flex: 0.9;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 1;
  margin-right: 15px;
  font-weight: normal;
  letter-spacing: 0.08px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 18px;
  ${FontEgo}
  &:hover,
  &:focus {
    color: #373737;
    text-decoration: none;
    background: #f7f7f7;
  }

  ${({ active }) =>
    active &&
    css`
      color: #373737;
      text-decoration: none;
      background: #f7f7f7;
      box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.36);
    `}
`;

const DeskTopFilter = styled.div`
  text-align: left;
  margin-right: auto;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const FilterOrder = styled.div`
  position: absolute;
  background: white;
  right: 5%;
  ${FontEgo}
  span {
    font-weight: 700;
  }
`;
