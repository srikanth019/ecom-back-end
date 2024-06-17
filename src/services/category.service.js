const { createCategory, fetchAllCategories } = require("../repositories/category.repository");

const create = async (req) => {
    return await createCategory(req.body)
};
//fetch all categories
const fetchAll = async () => {
    const filter = { is_deleted: false, }
    return await fetchAllCategories(filter)
};

module.exports = { create, fetchAll }