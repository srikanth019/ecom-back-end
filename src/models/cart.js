const mongoose = require('mongoose');
const { Schema } = mongoose;


const cartSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        }
    })
exports.Cart = mongoose.model('Cart', cartSchema)