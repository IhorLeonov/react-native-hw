// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1RZRkLxtFwK3GeNTe-pu8yhJfB-EN4eM",
  authDomain: "rn-social-app-be12c.firebaseapp.com",
  projectId: "rn-social-app-be12c",
  storageBucket: "rn-social-app-be12c.appspot.com",
  messagingSenderId: "381098777750",
  appId: "1:381098777750:web:a575d80032f909206376b7",
  measurementId: "G-EWFGQ1D2RT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
