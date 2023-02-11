const express = require('express');
const app = express();
const db = require("./models");

const dotenv = require("dotenv").config()

app.use(express.json());
const routerDobavljaci = require("./routes/dobavljac")
const routerSirovine = require("./routes/sirovina")
const routerZaposlenik = require("./routes/zaposlenik")
const routerUser = require("./routes/user")


app.use("/", routerUser);
app.use("/", routerZaposlenik);
app.use("/", routerDobavljaci)
app.use("/", routerSirovine)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Pokrenuto");
    })
})