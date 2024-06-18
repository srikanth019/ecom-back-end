const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    profileImage: {
        type: String
    },
    addresses: {
        type: [Schema.Types.Mixed]
    },
    // TODO:  We can make a separate Schema for this
    orders: { type: [Schema.Types.Mixed] }
},
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        }
    }
);

userSchema.pre("find", function (next) {
    // hide password key while fetching users
    this.select("-password");
    next();
});



// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    // Explicitly cast this.password as string
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare passwords
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

exports.User = mongoose.model('User', userSchema);