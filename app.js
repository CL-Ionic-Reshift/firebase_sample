import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZG9fog_Xu9ieNNjxN6Eby-z-Ua1q7kYE",
    authDomain: "fir-9-c67f3.firebaseapp.com",
    projectId: "fir-9-c67f3",
    storageBucket: "fir-9-c67f3.appspot.com",
    messagingSenderId: "369107355398",
    appId: "1:369107355398:web:8857768ae555868a78c087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Reference to the 'books' collection
const colRef = collection(db, 'books');

// Get the book list element
const bookList = document.getElementById('book-list');

// Fetch and display books
getDocs(colRef)
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const book = doc.data();

            // Create an HTML element for each book
            const li = document.createElement('li');
            li.textContent = `Title: ${book.title}, Author: ${book.author}`;

            // Append to the list
            bookList.appendChild(li);
        });
    })
    .catch(err => {
        console.error('Error fetching books:', err.message);
    });
