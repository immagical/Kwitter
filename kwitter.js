user = localStorage.getItem("username"); 
document.getElementById("welcomename").innerHTML = user + "!"; 

var firebaseConfig = {
    apiKey: "AIzaSyA4mrO8Re4malL1WyFEp_XyWI_hHfp2s-g",
    authDomain: "kwitter3-48270.firebaseapp.com",
    databaseURL: "https://kwitter3-48270-default-rtdb.firebaseio.com/",
    projectId: "kwitter3-48270",
    storageBucket: "kwitter3-48270.appspot.com",
    messagingSenderId: "553585288680",
    appId: "1:553585288680:web:c5868a956b864aaa9cb05d"
    };
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function LogOut() {
    console.log("Logging out user " + username);
    localStorage.removeItem("username"); 
    window.location = "index.html"; 
}
