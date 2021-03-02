const ProductModel = require("./ProductModel");

//__* CREAR UN PRODUCTO
exports.addProduct = async (req, res) => {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = ProductModel({
      name,
      size,
      unitaryPrice,
      description,
    });

    //si hay img agregale la url para pintar la img en el frontend
    if (req.file) {
      const { filename } = req.file;
      product.setImgUrl(filename);
    }

    const productStored = await product.save();

    res.status(201).send({ productStored });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



//__* OBTENER TODOS LOS PRODUCTOS
exports.getProducts = async (req, res) => {
  const products = await ProductModel.find().lean().exec();
  res.status(200).send({ products });
};

