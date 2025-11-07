import express from "express"
import fs from "fs";
import path from "path"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 5000;

app.use(express.json());


const buildPath = path.join(__dirname, "build");
if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath))
    app.get(/^\/(?!api).*/, (req))
}