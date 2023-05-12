const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    namaLengkap: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

module.exports = mongoose.model('user', userSchema)