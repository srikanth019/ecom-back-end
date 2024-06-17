const mongoose = require('mongoose');
const { Schema } = mongoose;

const brandSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true,
        unique: true
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
    });

exports.Brand = mongoose.model('Brand', brandSchema);