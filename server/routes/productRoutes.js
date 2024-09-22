import express from 'express';
import controllers from '../controllers/productControllers.js';

const router = express.Router();

router.get('/', controllers.getProducts);

router.get('/:id', controllers.getProductById);

export default router;