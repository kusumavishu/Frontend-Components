import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIYvTBOlau27aHb3CcDv8BYie6yV2cuVk",
  authDomain: "frontend-components-dc10d.firebaseapp.com",
  projectId: "frontend-components-dc10d",
  storageBucket: "frontend-components-dc10d.firebasestorage.app",
  messagingSenderId: "932269768116",
  appId: "1:932269768116:web:0311a6823122b11b00c6e1",
  measurementId: "G-8RPT2VN59Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
