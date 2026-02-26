# 🍳 React Recipe App

A fast, responsive, and accessible Single Page Application (SPA) for browsing delicious recipes. Built with modern React, Redux Toolkit, and optimized for maximum performance.

<img width="1919" height="968" alt="image" src="https://github.com/user-attachments/assets/6d317f59-363b-4f40-b6a8-58fde02faac6" />

## 🌟 About the Project

This project is a comprehensive recipe application that interacts with the [DummyJSON API](https://dummyjson.com/).

### 🎯 Key Features

- **Secure Authentication:** JWT-based login and user session management using `js-cookie`, but without refetching tokens.
- **Infinite Scrolling:** Seamlessly load new recipes as the user scrolls, powered by RTK Query's cache merging.
- **Performance Optimized:** Implements lazy loading for images and routes, optimized font rendering (`font-display: swap`), and priority fetching to ensure a blazing-fast Largest Contentful Paint (LCP).
- **Fully Accessible (a11y):** Keyboard navigable custom checkboxes, semantic HTML structure (`<ol>`, `aria-attributes`), and screen-reader friendly design.
- **Smart Caching:** Avoids redundant network requests using RTK Query.

---

## 🛠 Tech Stack & Dependencies

The project is built using the following core technologies:

- **[React](https://react.dev/)** (v19) - UI Library
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Redux Toolkit (RTK)](https://redux-toolkit.js.org/)** - Global state management
- **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)** - Powerful data fetching and caching
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- **[js-cookie](https://github.com/js-cookie/js-cookie)** - Simple cookie handling for auth tokens

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mykytakorotych-web/react-js-practice.git

   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-js-practice

   ```

3. **Install the dependencies:**

   ```bash
   npm install

   ```

4. **Start the development server:**

   ```bash
   npm run start

   ```

5. **Open the app:**
   Open http://localhost:3000 (or the port provided in your terminal) to view it in the browser.

## 📝 Demo Credentials

To test the authentication flow, you can use the following DummyJSON test user:

- **Username**: emilys

- **Password**: emilyspass
