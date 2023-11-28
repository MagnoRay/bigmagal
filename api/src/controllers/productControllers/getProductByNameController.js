const { Op } = require("sequelize");
const { Product } = require("../../db");

const getProductByNameController = async (name) => {
    const productByName = await Product.findAll({
        where: { status: true, name: { [Op.iLike]: `%${name}%` } },
    });
    return productByName;
}

module.exports = { getProductByNameController };