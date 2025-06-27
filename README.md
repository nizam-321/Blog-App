# Blog App

A simple blog application built with React and Tailwind CSS.  
Users can create, view, filter, and delete blog posts. All data is stored in the browser's localStorage.

## Live Demo

[Click here to view the live demo](https://blog-app-sandy-omega.vercel.app/)

## Features

- Create new blog posts with title, category, image, and content
- View all posts with images, titles, and content
- Filter posts by category (Technology, Lifestyle, Travel)
- View post details and add comments
- Delete posts
- Responsive and clean UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
blog-app/
├── public/
├── src/
│   ├── components/
│   │   └── BlogList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreatePost.jsx
│   │   ├── PostDetails.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── README.md
```

## Built With

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## License

This project is for learning and personal use.

---

**Enjoy blogging!**
