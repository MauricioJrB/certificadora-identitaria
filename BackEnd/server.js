import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.SERVER_PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}` );
});