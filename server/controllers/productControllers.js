import Product from '../models/product.js';

const controllers = {};

controllers.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        
        if (products.length > 0) {
            return res.status(200).json(products);
        }

        return res.status(404).json({msg: 'No products were found.'});

    } catch (error) {
        console.error('Failed to get products.', error);
        res.status(500).json({msg: "Server Error"});
    }
}

controllers.getProductById = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);

        if (product) {
            return res.status(200).json(product);
        }

        return res.status(404).json({msg: 'Product not found.'});

    } catch (error) {
        console.error('Failed to get product.', error);
        res.status(500).json({msg: "Server Error"});
    }
}

export default controllers;