import { Router } from "express";
import { getStockData } from "../controller/stockController.mjs";

const router = Router();

router.get("/search", getStockData);

export default router;
