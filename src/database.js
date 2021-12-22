import mongoose from "mongoose"

const db = mongoose.connect("mongodb://localhost/crud-mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('DB is connected to', db.connection.name))
    .catch(error => console.log(error))

export default db;