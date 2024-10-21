# Simple CRUD Application Using MongoDB

This project is a Items data management application that allows users to manage items with attributes like name, description, and price using MongoDB as the database.

## Project Structure
server/

├── controllers/
│   └── itemControllers.js

├─ models/
│   └── items.js

├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css

├── routes/
│   └── itemRoutes.js

└── server.js


## Features

- Create new items
- Read existing items
- Update item details
- Delete items
- User-friendly interface

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>

2. **install dependencies**:
   ```bash
   npm init
   and other modules by npm i <moduleName>
   
3. **connect to database**:
   ```bash
    MONGODB_URI= '<your-mongodb-connection-string>'
4. **Run application**:
  node server.js
     (or)
  we can also use the nodemon.





