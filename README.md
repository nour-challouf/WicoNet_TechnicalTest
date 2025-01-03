# Product Management System

## Project Overview
This project is designed to manage products using a full-stack application that includes:

1. **Backend**: A RESTful API built using Node.js, Express.js, and MongoDB for managing products.
2. **Frontend**: An Angular application that interacts with the backend API to perform CRUD operations on products.

---

## Technologies Used
- **Backend**:
  - **Node.js**: JavaScript runtime for building the backend.
  - **Express.js**: Web framework for building the REST API.
  - **MongoDB**: NoSQL database for storing product data.
  - **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
  - **dotenv**: For managing environment variables.
  - **CORS**: Middleware to handle Cross-Origin Resource Sharing.

- **Frontend**:
  - **Angular**: Framework for building the front-end application.
  - **Angular Material**: UI component library for building modern interfaces.
  - **@angular/common/http**: Angular's HTTP module for making API calls.

---

## Project Structure

```
.
├── backend/
│   ├── models/
│   │   └── productModel.js        # Mongoose model for products
│   ├── server.js                 # Main server file to run Express server
│   ├── .env                      # Environment variables (e.g., MongoDB URI)
│   └── package.json              # Node.js dependencies and scripts
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── services/
│   │   │   │   └── product.service.ts    # Angular service to interact with API
│   │   │   ├── components/
│   │   │   │   ├── product-list/
│   │   │   │   ├── product-details/
│   │   │   │   ├── add-product/
│   │   │   │   └── edit-product/
│   │   └── app.module.ts         # Main Angular module
│   └── angular.json
└── README.md
```

---

## Backend Setup

### 1. **Install Dependencies**
To set up the backend, navigate to the `backend/` folder and install the required dependencies:

```bash
cd backend
npm install
```

### 2. **Configure MongoDB**
Create a `.env` file in the `backend/` directory and add the MongoDB connection URI:

```
MONGODB_URI=mongodb://localhost:27017/product-db
```

You can replace `localhost` with your MongoDB Atlas URI if you're using a cloud database.

### 3. **Run the Backend**
To start the backend server, run the following command inside the `backend/` folder:

```bash
node server.js
```

The backend will be accessible at `http://localhost:5000`.

---

### 4. **API Endpoints**

The following routes are available in the backend for managing products:

- **GET /api/products**: Retrieve a list of all products.
- **GET /api/products/:id**: Retrieve the details of a specific product.
- **POST /api/products**: Add a new product.
- **PUT /api/products/:id**: Update an existing product.
- **DELETE /api/products/:id**: Delete a product by its ID.

### 5. **Testing the Backend**
To test the API, use Postman or any other API testing tool to make requests to the backend API. For example:
- Make a `GET` request to `http://localhost:3000/api/products` to get a list of all products.
- Make a `POST` request to `http://localhost:3000/api/products` with product data to add a new product.

---

## Frontend Setup

### 1. **Install Dependencies**
Navigate to the `FrontAngular/` folder and install the required dependencies:

```bash
cd FrontAngular
npm install
```

### 2. **Run the Frontend**
To start the Angular application, run the following command inside the `FrontAngular/` folder:

```bash
ng serve
```

The frontend will be available at `http://localhost:4200`.

### 3. **Components**
The Angular application contains the following components:

- **ProductListComponent**: Displays a list of all products.
- **ProductDetailsComponent**: Displays the details of a specific product.
- **AddProductComponent**: Provides a form for adding a new product.
- **EditProductComponent**: Provides a form for editing an existing product.

### 4. **Services**
- **ProductService**: Angular service responsible for making HTTP requests to the backend API for CRUD operations.

---

## How to Use the Application

### Backend:
1. Start the backend by running `node server.js` in the `backend/` folder.
2. The API will be available at `http://localhost:3000`.
3. Use Postman or the frontend to interact with the API.

### Frontend:
1. Start the frontend by running `ng serve` in the `frontend/` folder.
2. The Angular application will be available at `http://localhost:4200`.
3. Use the UI to manage products (add, view, edit, delete).

---

## API Example

### POST `/api/products`
To add a new product, send a `POST` request to `/api/products` with the following body:

```json
{
  "name": "Product A",
  "price": 100,
  "category": "Category 1"
}
```

### GET `/api/products`
To get a list of all products, send a `GET` request to `/api/products`.

### GET `/api/products/:id`
To get a specific product, send a `GET` request to `/api/products/{id}`.

### PUT `/api/products/:id`
To update a product, send a `PUT` request to `/api/products/{id}` with updated product data:

```json
{
  "name": "Updated Product A",
  "price": 120,
  "category": "Category 2"
}
```

### DELETE `/api/products/:id`
To delete a product, send a `DELETE` request to `/api/products/{id}`.

---

## Testing

### Backend Testing:
1. Use Postman or another tool to test the CRUD API.
2. Verify that the backend handles all the routes correctly and responds with appropriate status codes (200 for success, 404 for not found, etc.).

### Frontend Testing:
1. Manually test the user interface by interacting with the Angular app.
2. Ensure that the frontend properly displays the products, allows adding/editing products, and handles errors (e.g., when a product cannot be found or updated).

---

## Error Handling

- **Backend**:
  - 404 errors are returned if a product is not found.
  - 500 errors are returned for internal server errors.
  
- **Frontend**:
  - If the API request fails (e.g., due to a server error), an error message will be displayed.

---

## Conclusion

This full-stack application demonstrates how to use **Node.js**, **Express**, and **MongoDB** to build a backend API and how to integrate it with an **Angular** frontend for managing products.

---

## Additional Notes

- MongoDB needs to be running locally or you need to set up a MongoDB instance in the cloud (e.g., MongoDB Atlas).
- This project can be extended with features like user authentication, advanced error handling, and validation of input data.
- You can modify the Angular UI to add more features, such as search or filtering products.

---
