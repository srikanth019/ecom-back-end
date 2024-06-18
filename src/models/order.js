const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    items: {
        type: [Schema.Types.Mixed],
        required: true
    },
    totalAmount: {
        type: Number
    },
    totalItems: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    //TODO:  we can add enum types
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    selectedAddress: {
        type: Schema.Types.Mixed,
        required: true
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    }
});


exports.Order = mongoose.model('Order', orderSchema);