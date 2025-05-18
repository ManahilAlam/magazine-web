// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhHqgHEmtTKf14pBW-8Bmty62MmAS415w",
    authDomain: "contactform-d0e2b.firebaseapp.com",
    databaseURL: "https://contactform-d0e2b-default-rtdb.firebaseio.com",
    projectId: "contactform-d0e2b",
    storageBucket: "contactform-d0e2b.appspot.com",
    messagingSenderId: "927498341334",
    appId: "1:927498341334:web:f1228704873f26b769b277"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your Firebase Realtime Database
  const contactFormDB = firebase.database().ref("contactform");
  
  // Add event listener to the form
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  // Form submit function
  function submitForm(e) {
    e.preventDefault();
  
    // Get values from input fields
    const name = getElementVal("name");
    const emailid = getElementVal("emailid");
    const msgContent = getElementVal("msgContent");
  
    // Save data to Firebase
    saveMessages(name, emailid, msgContent);
  
    // Optionally: reset form and show alert
    document.getElementById("contactForm").reset();
    alert("Your message has been sent!");
  }
  
  // Save messages to Firebase
  const saveMessages = (name, emailid, msgContent) => {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent
    });
  };
  
  // Helper function to get form input values
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  