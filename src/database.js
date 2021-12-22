import mongoose from "mongoose"
import {MONGODB_URI} from './config';

const db = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB is connected to', db.connection.name))
    .catch(error => console.log(error))

export default db;