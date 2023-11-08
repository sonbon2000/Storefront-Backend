import express, { Request, Response } from "express";
import { User, UserStore } from "../models/User";
import dotenv from "dotenv";
import { generateAccessToken, verifyAuthToken } from "../authen";

dotenv.config();

const userStore = new UserStore();

const login = async (request: Request, response: Response) => {
  try {
    const account: string = request.body.account;
    const password: string = request.body.password;
    const check = await userStore.login(account, password);
    if (check) {
      const token = generateAccessToken(account);
      response.status(200).json({ token });
    } else {
      response.status(400).json("Account or password not valid");
    }
  } catch (error) {
    response.status(400).json("Error happen");
  }
};

const showAllUsers = async (request: Request, response: Response) => {
  try {
    const users = await userStore.getAllUsers();
    response.status(200).json(users);
  } catch (error) {
    response.status(401);
  }
};

const showUserById = async (request: Request, response: Response) => {
  try {
    let id: number = parseInt(request.params.id);
    const user = await userStore.getById(id);
    response.json(user);
  } catch (error) {
    response.json("Have error");
  }
};

const addUser = async (request: Request, response: Response) => {
  try {
    const user: User = {
      id: 0,
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      password: request.body.password,
      account: request.body.account,
    };
    const result = await userStore.add(user);
    switch (result) {
      case -1:
        response.status(400);
        response.json("account existed");
        break;
      case 0:
        response.status(200);
        response.json("Success");
        break;
      default:
        break;
    }
  } catch (error) {
    response.status(400);
  }
};

const userController = (app: express.Application) => {
  app.post("/login", login);
  app.get("/user/all", verifyAuthToken, showAllUsers);
  app.get("/user/show/:id", verifyAuthToken, showUserById);
  app.post("/user/insert", addUser);
};

export default userController;
