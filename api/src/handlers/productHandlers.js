const { getProductByNameController } = require("../controllers/productControllers/getProductByNameController");
const { getAllProductsController } = require("../controllers/productControllers/getAllProductsController");

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

module.exports = {
    getProductHandler
}