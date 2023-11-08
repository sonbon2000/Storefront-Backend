# Storefront Backend API Requirements

## Overview

This API serves as the backend for a storefront application. It provides the necessary endpoints to manage products, orders, and users.

## RESTful Routes

### Products

- `GET /product` - Retrieve all products
- `GET /product/show/:id` - Retrieve a specific product by ID
- `POST /product/insert` - Create a new product [token required]
- `UPDATE /product/update` - Update a product by Id
- `DELETE /product/:id` - Delete a product by Id

### Users

- `POST /login` - User login
- `GET /user/all` - Show all user
- `GET /user/show/:id` - Show user by id
- `POST /user/insert` - Create a new user

## Database Schema

The database schema should include the following tables:

### Product

- `id` (integer, primary key, DEFAULT nextval('"Product_id_seq"'::regclass))
- `name` (character varying(256), required)
- `price` (numeric(10,2), required)
- `category` (character varying(256))

### Users

- `id` (integer, primary key, DEFAULT nextval('"User_id_seq"'::regclass))
- `firstname` (string, required)
- `lastname` (string, required)
- `password` (text, required)
- `account` (character varying(256), UNIQUE, required)

## Authentication

- JWT (JSON Web Tokens) for authen
