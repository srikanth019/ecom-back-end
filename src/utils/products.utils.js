const { PRODUCTS_PER_PAGE } = require("../constants/global.constants");
const { Brand } = require("../models");

exports.getProductsPipeline = (req) => {
    let { _page, _limit, _sort, _order, category, brand, search } = req.query;

    // Convert _page and _limit to integers (default values if not provided)
    _page = parseInt(_page) || 1;
    _limit = parseInt(_limit) || PRODUCTS_PER_PAGE;

    let pipeline = [];
    // Match stage for filtering and text search
    let filter = {};
    if (category) {
        if (typeof category === 'string') {
            category = [category];
        }
        filter.category = { $in: category };
    }
    if (brand) {
        if (typeof brand === 'string') {
            brand = [brand];
        }
        filter.brand = { $in: brand };
    }
    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } }
        ];
    }
    pipeline.push({ $match: filter });

    // Sort stage
    let sortStage = {};
    if (_sort && _order) {
        sortStage[_sort] = _order === 'asc' ? 1 : -1;
    } else {
        sortStage.created_at = -1; // Default sorting by createdAt descending
    }
    pipeline.push({ $sort: sortStage });

    // Pagination stages
    pipeline.push({ $skip: (_page - 1) * _limit });
    pipeline.push({ $limit: _limit });

    // Add a facet stage for pagination and total count
    pipeline.push({
        $facet: {
            data: [
                { $skip: (_page - 1) * _limit },
                { $limit: _limit }
            ],
            totalCount: [
                { $count: 'count' }
            ]
        }
    });

    return pipeline;
}