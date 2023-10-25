const mongoose = require("mongoose");

const NotaSchema = new mongoose.Schema({
    pessoa: { type: Object, required: true },
    passeioId: { type: Number, required: true },
    comentario: { type: String },
    nota: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Nota', NotaSchema, 'nota');
