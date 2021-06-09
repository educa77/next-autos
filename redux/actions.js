import Axios from "axios";

const getAllModels = () => async (dispatch) => {
  // Fetch data from external API
  const res = await Axios.get(process.env.urlModels);
  dispatch({ type: "GET_MODELS", payload: res.data });
  // Pass data to the page via props
};

const getAllAutos = () => async (dispatch) => {
  const res = await Axios.get(process.env.urlModels);
  const autos = res.data.filter((element) => element.segment === "Autos");
  dispatch({ type: "GET_MODELS", payload: autos });
};

const getAllPickups = () => async (dispatch) => {
  const res = await Axios.get(process.env.urlModels);
  const pickups = res.data.filter(
    (element) => element.segment === "Pickups y Comerciales"
  );
  dispatch({ type: "GET_MODELS", payload: pickups });
};

const getAllSuvs = () => async (dispatch) => {
  const res = await Axios.get(process.env.urlModels);
  const suvs = res.data.filter(
    (element) => element.segment === "SUVs y Crossovers"
  );
  dispatch({ type: "GET_MODELS", payload: suvs });
};

const getOrder = (a, b) => (dispatch) => {
  const data = { a, b };
  dispatch({ type: "GET_ORDER", payload: data });
};

const getOneModel = (id) => async (dispatch) => {
  const res = await Axios.get(`${process.env.urlModels}/${id}`);
  dispatch({ type: "GET_ONE_MODEL", payload: res.data });
};

export {
  getAllModels,
  getAllAutos,
  getAllPickups,
  getAllSuvs,
  getOrder,
  getOneModel,
};
