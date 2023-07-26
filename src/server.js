require("express-async-errors");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

//cirando o servidor
const express = require("express");
const {request, response, json} = require("express");
const routes = require("./routes")

const PORT = 3333;
const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json());
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError)
        return response.status(error.statusCode).json({ status: "Error", message: error.message });
    else
        return response.status(500).json({ status: "Error", message: "Internal server error!" });
})