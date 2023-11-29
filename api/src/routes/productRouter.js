const { Router } = require("express");
const { getProductHandler, getAdminProductsHandler } = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);
productRouter.get("/admin", getAdminProductsHandler);

module.exports = {
    productRouter
};
