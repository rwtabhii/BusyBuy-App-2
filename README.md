# 🛒 BuyBusy App

**BuyBusy** is an e-commerce web application built with **React + Vite**. It allows users to browse products, sign up, log in, and manage their shopping cart. The app uses **Firebase** for authentication and database, and **React Context API** for state management.

---

## ⚡ Features

- 🔐 **Authentication** – Sign up, login, and logout using **Firebase Auth** for secure user management.  
- 🛍️ **Product Listing** – Display available products.  
- 🛒 **Shopping Cart** – Add, remove, and update items in the cart.  
- 👤 **User Context** – Manage authentication state across the app using **React Context API**.  
- 📦 **Cart Context** – Manage the cart globally without prop drilling.  
- 🎨 **Modern Responsive UI** – Built with **React + CSS**.  
- 🔔 **Notifications** – Display toast notifications for user actions like login, signup, or cart updates using **React Toastify**.  

---

## 🛠 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/buybusy.git
cd buybusy

2. **Install dependencies**
npm install 

3. Setup Firebase
-Create a Firebase project at Firebase Console
-Enable Authentication (Email/Password)
-Enable Firestore Database in test mode
-Copy your Firebase config into firebaseinit.js in the src folder

example like :-
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

4. **Run the Project**
npm run dev

## Project Structure

buybusy/
├─ public/
│   └─ assets/               # Images, logos, icons
├─ src/
│   ├─ api/                  # API functions (Firebase calls)
│   │   └─ users/
│   │       └─ users.js
│   ├─ component/            # Reusable components
│   │   └─ navbar/
│   │       └─ navbar.jsx
│   ├─ context/              # React Context for global state
│   │   ├─ userContext.jsx
│   │   └─ cartContext.jsx
│   ├─ pages/                # Main pages
│   │   ├─ home/
│   │   │   └─ home.jsx
│   │   ├─ login/
│   │   │   └─ loginForm.jsx
│   │   └─ register/
│   │       └─ registerPage.jsx
│   ├─ App.jsx               # Root layout (Navbar + Outlet + ToastContainer)
│   ├─ main.jsx              # Entry point
│   └─ index.css             # Global styles
├─ package.json
└─ vite.config.js


 ## ⚡ Technologies Used

-Frontend: React, Vite, CSS
-State Management: React Context API
-Backend/Database: Firebase Auth + Firestore
-Notifications: React Toast

## 📞 Contact
email : devabhishekrawat@gmail.com
github : 