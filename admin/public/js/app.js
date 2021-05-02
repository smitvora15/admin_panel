
 
  var firebaseConfig = {
    apiKey: "AIzaSyCEt1vUQrEECcILCAKx9p5WeRKFxJ7ai2I",
    authDomain: "aushadhi-9597a.firebaseapp.com",
    databaseURL: "https://aushadhi-9597a-default-rtdb.firebaseio.com/",
    projectId: "aushadhi-9597a",
    storageBucket: "aushadhi-9597a.appspot.com",
    messagingSenderId: "763309908157",
    appId: "1:763309908157:web:04f32baae9b6969ab257d4",
    measurementId: "G-S0PRC50471"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  


    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }