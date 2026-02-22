# Student Management System

A simple, efficient, and latest-standard React application for managing student records. This project focuses on high performance, clean UI, and a streamlined user workflow.



## 🚀 Features

* **Student Registration:** Quickly add students with names and roll numbers.
* **Favorite Selection:** Curate a personalized list of students with a single click.
* **Dual-View Navigation:** Seamless switching between the master list and favorites using React Router.
* **Modern SaaS UI:** A minimalist design using Tailwind CSS with no distracting focus rings or heavy borders.
* **Global State:** Uses React Context API to ensure data persistence across different pages.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router DOM
* **State Management:** Context API (Provider/Consumer Pattern)
* **Styling:** Tailwind CSS (Modern Minimalist Theme)
* **Code Style:** Traditional JavaScript function syntax 



## 📂 Project Structure

```text
src/
├── components/
│   ├── StudentContext.js  # Global state and logic
│   ├── StudentList.js     # Main dashboard and registration
│   └── Favourites.js      # Saved student view
├── App.js                 # Layout and Routing
└── index.js               # Application entry point

