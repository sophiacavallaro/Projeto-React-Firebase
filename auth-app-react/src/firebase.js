import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// SUA CONFIG (copiada do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCHUGSvc1JRxEQbHKXn2oZqqojADd_CvpY",
  authDomain: "atividadebd1.firebaseapp.com",
  projectId: "atividadebd1",
  storageBucket: "atividadebd1.firebasestorage.app",
  messagingSenderId: "268579354162",
  appId: "1:268579354162:web:0422a11fa3887b2e8a2e2b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Auth (LOGIN)
export const auth = getAuth(app);