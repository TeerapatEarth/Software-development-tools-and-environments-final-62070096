require("./src/db/database").connect();
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors({
  origin: '*',
  credentials: true
}))

app.use(express.json());

const TestRouter = require("./src/routes/TestRoutes")
app.use(TestRouter)

const BookingRouter = require("./src/routes/BookingRoutes")
app.use(BookingRouter)

module.exports = app;