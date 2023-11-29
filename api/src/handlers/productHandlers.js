const { getProductByNameController } = require("../controllers/productControllers/getProductByNameController");
const { getAllProductsController } = require("../controllers/productControllers/getAllProductsController");
const { getAdminProductsController } = require("../controllers/productControllers/getAdminProductsController");

const getProductHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const productByName = await getProductByNameController(name);
            res.status(200).send(productByName);
        } else {
            const allProduct = await getAllProductsController();
            res.status(200).send(allProduct);
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const getAdminProductsHandler = async (req, res) => {
    try {
        const allProduct = await getAdminProductsController();
        res.status(200).send(allProduct);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = {
    getProductHandler,
    getAdminProductsHandler
}