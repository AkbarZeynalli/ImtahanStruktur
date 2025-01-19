import express, { json } from "express";
import "dotenv/config"
import "./src/db/dbConnect.js"
import productRouter from "./src/routers/productRouters.js";
import cors from "cors";

const port = process.env.PORT || 5001
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/Products", productRouter)

app.get("/", (req, res) => {
    res.send("Salam Mən Əkbər Zeynallı")
})
app.listen(port, (req, res) => {
    console.log(`Server is running on port  http://localhost:${port}`);
})