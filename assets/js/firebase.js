const firebaseConfig = {
    apiKey: "AIzaSyB_SYE0QM4mzykxZPLpKvq09ake4p1dEz0",
    authDomain: "valentineproject-bram.firebaseapp.com",
    projectId: "valentineproject-bram",
    storageBucket: "valentineproject-bram.firebasestorage.app",
    messagingSenderId: "21524686863",
    appId: "1:21524686863:web:a126ceef15bfe17962db7a",
    measurementId: "G-7FSLNBKQ56"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase initialized successfully");
} catch (error) {
    console.error("❌ Firebase initialization failed:", error.message);
}

// Make auth and db globally available
window.auth = firebase.auth();
window.db = firebase.firestore();

console.log("🔥 Firebase Auth + Firestore READY");
