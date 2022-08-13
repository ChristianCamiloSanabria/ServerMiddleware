import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ConexionScheme = new Schema({
    ip: String,
    data: String,
    status: {
        tipo: Boolean,
        default: false
    }
});

export default mongoose.model('Conexion', ConexionScheme);