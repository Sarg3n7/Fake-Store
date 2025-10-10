# 🛍️ Fake Store – React E-Commerce App

**Fake Store** is a React-based e-commerce application that fetches and displays products from the [Fake Store API](https://fakestoreapi.com/).  
It allows users to browse items, view detailed information, and manage basic CRUD operations for products.

---

## 🚀 Features

- 🧠 **Dynamic Product Listing** – Fetches product data in real-time from Fake Store API using Axios.  
- 🔍 **Product Details Page** – View detailed information about each product.  
- 🆕 **Create / Edit Products** – Add or update products dynamically.  
- 💨 **Loading State** – Smooth loading component for better UX.  
- 🧭 **Navigation Bar** – Provides quick access to different sections.  
- 🧱 **Component-Based Structure** – Clean, modular React architecture for scalability.  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend Framework** | React + Vite |
| **Routing** | React Router DOM |
| **HTTP Client** | Axios |
| **State Management** | React Context API |
| **Styling** | CSS Modules |
| **Linting** | ESLint |

---

## 📂 Project Structure

```
Fake Store/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Create.jsx
│   │   ├── Details.jsx
│   │   ├── Edit.jsx
│   │   ├── Home.jsx
│   │   ├── Loading.jsx
│   │   └── Nav.jsx
│   ├── utils/
│   │   ├── Axios.jsx
│   │   └── Context.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sarg3n7/fake-store.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd fake-store
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
5. Open your browser and visit:  
   👉 **http://localhost:5173**

---



## 💡 Future Enhancements

1. **🔍 Improve Search Functionality**  
   - The search bar in the navigation currently doesn’t return results even for exact matches.  
   - **Plan:** Implement fuzzy search, debouncing, and partial match detection for smoother search performance.

2. **🎨 Enhance UI/UX Design**  
   - Add animations, consistent color themes, and responsive layouts.  
   - Improve product card aesthetics, spacing, and typography.

3. **📈 Make the App Scalable**  
   - Integrate pagination, lazy loading, and caching.  
   - Adopt Redux or Zustand for better state management.  
   - Prepare backend integration (Node.js + MongoDB / Firebase) for persistent data handling.

---

## 🤝 Contributing

Contributions are welcome!  
If you’d like to improve this project:
1. Fork the repository.  
2. Create a new branch (`feature/your-feature`).  
3. Commit and push your changes.  
4. Open a Pull Request.

---

## 🧾 License

This project is open-source and available under the [MIT License](LICENSE).

