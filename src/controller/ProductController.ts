import express, { Request, Response } from "express";
import { Product, ProductStore } from "../models/Product";
import { verifyAuthToken } from "../authen";

const productStore = new ProductStore();

const getAllProduct = async (request: Request, response: Response) => {
  try {
    const products = await productStore.showAll();
    response.status(200).json(products);
  } catch (error) {
    response.status(400).json("Error happen");
  }
};

const getProductById = async (request: Request, response: Response) => {
  try {
    let id: number = parseInt(request.params.id);
    const product: Product = await productStore.showById(id);
    response.status(200).json(product);
  } catch (error) {
    response.status(400).send("Product is invalid");
  }
};

const addProduct = async (request: Request, response: Response) => {
  try {
    const product: Product = {
      id: 0,
      name: request.body.name,
      price: parseFloat(request.body.price),
      category: isNaN(request.body.category) ? request.body.category : "",
    };
    const result = await productStore.add(product);
    response.status(200).json(result);
  } catch (error) {
    response.status(400);
    response.send("Product cannot be added");
  }
};

const updateProduct = async (request: Request, response: Response) => {
  try {
    const product: Product = {
      id: request.body.id,
      name: request.body.name,
      price: parseFloat(request.body.price),
      category: isNaN(request.body.category) ? request.body.category : "",
    };
    const result = await productStore.update(product);
    response.status(200).json(result);
  } catch (error) {
    response.status(400).send("Product cannot be updated");
  }
};

const deleteProduct = async (request: Request, response: Response) => {
  try {
    let id: number = parseInt(request.params.id);
    const result = await productStore.delete(id);
    response.send("Delete " + result + " record");
  } catch (error) {
    response.status(400).send("Product cannot be deleted");
  }
};

const productControllers = (app: express.Application) => {
  app.get("/product/", getAllProduct);
  app.get("/product/show/:id", getProductById);
  app.post("/product/insert", verifyAuthToken, addProduct);
  app.put("/product/update", verifyAuthToken, updateProduct);
  app.delete("/product/:id", verifyAuthToken, deleteProduct);
};

export default productControllers;
