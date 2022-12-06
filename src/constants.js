export const BASE_URL = "http://localhost:3000/api/";
export const ENDPOINTS = {
  PRODUCTS: {
    BASE: "producto/",
    ALL: "producto/todos/",
    DEACTIVATE: "producto/des/",
    ACTIVATE: "producto/act/",
    IMAGE: "producto/src/",
    TITLE: "producto/ttl/",
    SIZE: "producto/sz/",
    PRICE: "producto/prc/",
  },
  PLACES: {
    BASE: "lugar/",
  },
  ORDERS: {
    BASE: "orden/",
    ACTIVES: "orden/act/",
  },
  CLIENTS: {
    BASE: "clientes/", // Enviar email y telefono en body
    LOGIN: "vtoken/login/", // Enviar token del correo en body
    VERIFY: "vtoken/posts/", // Enviar token de sesion en Authorization Bearer
  },
};
