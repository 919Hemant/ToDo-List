# Todo List Application

A modern and user-friendly Todo list web application built with **React** and **Vite**.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Clean, responsive UI
- ✅ Task counter

## Project Structure

```bash
TodoApp/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── component/
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Todoitem.css
│   │   ├── ToDoItem.jsx
│   │   ├── TodolIst.css
│   │   ├── TodoList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── package-lock.json
├── package.json
├── vite.config.js
└── index.html
```

## Technology Stack

- React (Functional Components with Hooks)
- CSS for styling
- Material UI Icons
- Vite for build and development

## Requirements

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate into the project directory
```bash
cd TodoApp
```

3. Install the dependencies
```bash
npm install
# or if using yarn
yarn
```

4. Run the development server
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173/
```

## Application Components

- **App**: The main container component
- **Header**: Contains the app title, input field for adding new tasks, and task counter
- **TodoList**: Manages and displays the list of todo items
- **TodoItem**: Individual task component with complete, edit, and delete functionality

## Implementation Details

- State management using React hooks (useState)
- Props for component communication
- Unique IDs for each task (using timestamps)
- Event handling for all user interactions
- Responsive design for various screen sizes

## License

MIT

## Acknowledgements

- React Documentation
- Material UI Icons
- Vite