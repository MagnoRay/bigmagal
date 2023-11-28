const { Router } = require("express");
const { getProductHandler } = require("../handlers/productHandlers");

const productRouter = Router();

productRouter.get("/", getProductHandler);

module.exports = {
    productRouter
};
