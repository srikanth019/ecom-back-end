const { createBrand, fetchAllBrands } = require("../repositories/brand.repository");

const create = async (req) => {
    return await createBrand(req.body)
};

const fetchAll = async () => {
    const filter = { is_deleted: false, }
    return await fetchAllBrands(filter)
};

module.exports = { create, fetchAll }