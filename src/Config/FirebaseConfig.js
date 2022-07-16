// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAuxuppnHHQChqAU3qWNmFDbxe2NkYhAO8",
  authDomain: "v1-4610e.firebaseapp.com",
  databaseURL: "https://v1-4610e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "v1-4610e",
  storageBucket: "v1-4610e.appspot.com",
  messagingSenderId: "171813551009",
  appId: "1:171813551009:web:ae48b58c635b72364f29e0",
  measurementId: "G-H39L8N6TVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
