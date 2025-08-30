# 🚀 Portfolio Showcase - React, Tailwind & Three.js

Welcome to my personal portfolio, a modern and interactive showcase of my projects, skills, and journey as a developer. This application is built from the ground up using a powerful tech stack including **React 18**, **Tailwind CSS**, and **Three.js** for engaging 3D visuals.

The entire application is fully responsive, ensuring a seamless experience on any device. It's deployed on **Vercel** and configured for smooth single-page application (SPA) navigation using Vercel rewrites.

---

## 🔹 Live Demo
✨ [View Live Project on Vercel](https://portfolio-showcase-8qmz7mlxf-vedag812s-projects.vercel.app/) ✨

---

## 📸 Sneak Peek
*(Consider adding a screenshot or GIF of your project here!)*

---

## 🌟 Features

This project isn't just a static page; it's a full-featured showcase application with a component-based architecture:

- **Interactive 3D Graphics**: Integrated Three.js for stunning and interactive 3D models and animations.
- **Dynamic Project Showcase**:
  - **Homepage**: Clean, card-based layout to display all projects or blog posts.
  - **Details Page**: Dedicated page for each project, providing an in-depth view.
  - **Markdown Support**: Project details can be written in Markdown for easy formatting and readability.
- **Modern Tech Stack**:
  - Built with **React 18**
  - Styled with **Tailwind CSS**, including Dark Mode Toggle
  - Client-side routing managed by **React Router**
- **User Experience**:
  - Persistent **Navbar** and **Footer** across all pages
  - **Search & Filter** functionality for projects
  - Fully **Responsive**, mobile-first design
  - **Data Driven**: Content fetched from a JSON file or an external API
- **Production Ready**:
  - Optimized for production builds
  - Deployed on **Vercel** with custom routing rules (`vercel.json`) to support SPA experience

---

## 💻 Technologies Used

- **Frontend**: React 18, HTML5, CSS3  
- **Styling**: Tailwind CSS  
- **3D Graphics**: Three.js  
- **Routing**: React Router  
- **Deployment**: Vercel  
- **Package Manager**: npm  

---

## 📁 Project Structure
```
portfolio-showcase/
├── public/ # Static assets (index.html, favicon, images)
├── src/
│   ├── components/ # Reusable React components (Navbar, Footer, Card, etc.)
│   ├── pages/ # Page components (Home, ProjectDetail, etc.)
│   ├── assets/ # Static assets for components (CSS, images)
│   └── App.js # Main application component with routing
├── package.json # Project metadata & dependencies
├── vercel.json # Vercel routing configuration for React Router
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js # PostCSS configuration
```

---

## 🚀 Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/Vedag812/Showcase
   cd portfolio-showcase
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Start development server  
   ```bash
   npm start
   ```

4. Build for production  
   ```bash
   npm run build
   ```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
