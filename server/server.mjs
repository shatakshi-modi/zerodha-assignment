import express from "express";
import apiRoutes from "./routes/api.mjs";
import cors from "cors"
const app = express();
app.use(cors());
app.use("/api", apiRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
