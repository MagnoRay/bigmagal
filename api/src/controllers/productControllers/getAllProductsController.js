const { Product } = require('../../db');

const getAllProductsController = async () => {
    const allProduct = await Product.findAll();

    for (let i = allProduct.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allProduct[i], allProduct[j] = allProduct[j], allProduct[i]];
    }
    return allProduct;
}

module.exports = { getAllProductsController };