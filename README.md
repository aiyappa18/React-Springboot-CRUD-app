# Simple CRUD App

Simple CRUD App is a basic web application created using React for the frontend, Spring Boot for the backend, and MySQL for the database. It allows users to perform CRUD operations (Create, Read, Update, Delete) on a set of data.

## Technologies Used

- **Frontend**:
  - React

- **Backend**:
  - Spring Boot

- **Database**:
  - MySQL

## Installation

1. Clone the repository:
git clone <repository-url>


2. Set up the MySQL database:
- Create a MySQL database and note down the credentials.

3. Configure the backend:
- Navigate to the `backend` directory.
- Open `src/main/resources/application.properties` and configure the MySQL database connection properties (`spring.datasource.url`, `spring.datasource.username`, `spring.datasource.password`).

4. Run the backend server:
- Navigate back to the project root directory.
- Execute the following command:
  ```
  cd backend
  ./mvnw spring-boot:run
  ```

5. Configure the frontend:
- Navigate to the `frontend` directory.
- Open `src/api/index.js` and update the base URL if necessary to match the backend server's address.

6. Run the frontend development server:
- Navigate back to the project root directory.
- Execute the following command:
  ```
  cd frontend
  npm install
  npm start
  ```


## Features

- **CRUD Operations**: Allows users to perform Create, Read, Update, and Delete operations on the data.
- **React Frontend**: Provides a responsive and user-friendly interface built using React.
- **Spring Boot Backend**: Implements the backend logic and exposes RESTful APIs for CRUD operations.
- **MySQL Database**: Stores the application data persistently.


