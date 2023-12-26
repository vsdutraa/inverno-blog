# Inverno Blog App

A simple blog application where users can create, view, and delete blogs.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the React application with `npm start`.
4. Start the JSON server with `npx json-server --watch ./data/db.json --port 8000`.

Make sure you have Node.js and npm installed in your environment.

## Features

- **Create Blog:** Access the blog creation page to add new posts.
- **View Blogs:** Navigate the home page to see the list of available blogs.
- **View Specific Blog:** Use the `/blog/:id` route to view a specific blog.
- **Delete Blog:** Remove unwanted blogs with the option to delete.
- **404 Page:** Implemented to handle not found routes.

## Technologies Used

- **React:** JavaScript library for building the user interface.
- **JSON Server:** Creates a fake REST API to simulate a backend server.