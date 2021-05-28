const express = require('express');

// Create an Express App
const chatApp = express();

// Defien Port Number
const appPort = 3000;

// Running the Server
chatApp.listen(appPort, function(){
    console.log("The Chat App Server is running...");
});

// HTTP GET Query Example : Send Text Plain
chatApp.get('/', function(request, response){
    response.send("Welcome to Chat App");
});

// HTTP GET Query Example : Send Text Plain
chatApp.get('/login', function(request, response){
    response.send("ChatApp : Welcome to the Login Page");
});

// HTTP GET Query Example : Send HTML
chatApp.get('/html', function(request, response){
    response.send("<b>ChatApp : <i>Welcome</i> to the Login Page</b>");
});

// Download a PDF File
chatApp.get('/file', function(request, response){
    response.download('doc.pdf');
});


// Send a JSON File
chatApp.get('/profile', function(request, response){
    var profile = {
        firstName: "ABC",
        lastName: "CDE",
        email: "abc.cde@gmail.com",
    };

    response.json(profile);
});

// Redirection to HTTP URL
chatApp.get('/google', function(request, response){
    response.redirect("http://www.google.com");
});

// Redirection to Local URL
chatApp.get('/user', function(request, response){
    response.redirect("/profile");
});


// Send a JSON File with a Server Error Status
chatApp.get('/profile-page', function(request, response){
    var profile = {
        firstName: "ABC",
        lastName: "CDE",
        email: "abc.cde@gmail.com",
    };

    response.json(profile);
    response.status(200);
});



// HTTP GET Query with Params
chatApp.get('/conversation/:id/:size', function(request, response){
    var conversationId = request.params.id;
    var size = request.params.size;
    if (size == "big"){
        response.send("<h1>Conversation with User Number : " + conversationId + " Loaded...<h1>");
    }else if (size == "medium"){
        response.send("<h3>Conversation with User Number : " + conversationId + " Loaded...<h3>");
    }

});