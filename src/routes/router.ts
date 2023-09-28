const router = express.Router();
import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  editProduct,
} from "../controllers/productControllers";

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.post("/products", createProduct);
router.put("/products/:id", editProduct);

export default router;
