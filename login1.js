// User class created to implement features
class User {

  // The constructor for our class, which will allow us to create new objects of our class
    constructor(username, password) {
      this.username = username;
      this.password = this.hashPassword(password);
      this.lastAccess = null;
    }
  
    // Function that allows us to set lastAccess to current time in unix time (Date.now())
    setLastAccess(){
      this.lastAccess = Date.now();
    }
  
    // Simple function to hash passwords in order for us not to store then in clear text
    hashPassword(rawPassword){
      var a = 1, c = 0, h, o;
      if (rawPassword) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        //This is a loop that goes through all passwords and emails
        for (h = rawPassword.length - 1; h >= 0; h--) {
          o = rawPassword.charCodeAt(h);
          a = (a<<6&268435455) + o + (o<<14);
          c = a & 266338304;
          a = c!==0?a^c>>21:a;
        }
      }else {
        // If the password is not valid, we'll throw and error we're able to catch
        throw new Error("Password or email is not correct - try again or sign up");
      }
      return String(a);
    }
  }
  
  // We set a debug variable in order to switch on or off debug mode of our small program
  var debug = 1;
  
  // Initialize an empty array
  var users = [];
  
  // Fill it up with a few users
  users.push(new User("Henrik", "Kode543"));
  users.push(new User("Peter", "Pan"));
  users.push(new User("Amanda", "Kode123"));
  
  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');
  
  // Bind the span for result text for later use
  var resultSpan = document.getElementById('loginResult');
  
  // Bind a counter in order to see if the user has tried to login too many times
  var counter = 3;
  
  // Bind the onClick-function to our own function
  submit.onclick = function(){
  
    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');
  
    if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
      // We set the resultspan with a new text and return false to get out of this function
      resultSpan.innerText = "You must write your email and valid password";
      return false;
    }
  
    // We loop through all our users and return true if we find a match
    for(var i = 0; i < users.length; i++) {
  
      // Bind user to a variable for easy use
      var user = users[i];
  
      // If debug mode is enabled, we console.log the user object from the list
      if(debug == 1){
        console.log(user);
      }
  
      // We use a try-catch for the hash-password function, since something could go wrong.
      try {
  
        // We try to create a variable with the hashed version of the inputPassword
        var hashedInputPassword = user.hashPassword(inputPassword.value);
      } catch(error){
  
        // We console log any error that might have been thrown
        console.log(error);
      }
  
      // If username and password we have in put matches the one in our loop
      if(user.username == inputUsername.value && user.password == hashedInputPassword) 
      {
      return window.location.replace("file:///Users/Amanda/Documents/CBS/Introduction%20to%20Programming/Exam/mainpage.html")
      }
    else 
    {
      resultSpan.innerText = "Wrong username or password - Please try again";
    }
    }
    }

//Create an account - Link to sign-up form
document.getElementById("createaccount").onclick = function () {
    location.href = "signup1.html";
};


function lastModified() {
  var modiDate = new Date(document.lastModified);
  var showAs = modiDate.getDate() + "-" + (modiDate.getMonth() + 1) + "-" + modiDate.getFullYear();
  return showAs
}

function GetTime() {
  var modiDate = new Date();
  var Seconds

  if (modiDate.getSeconds() < 10) {
      Seconds = "0" + modiDate.getSeconds();
  } else {
      Seconds = modiDate.getSeconds();
  }

  var modiDate = new Date();
  var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
  return CurTime
}

document.write("Last updated on ")
document.write(lastModified() + " @ " + GetTime());
document.write("");


// Creating connection between HTML and Javascript

var calculate = function calculate() {
  console.log("calculate call")

  var amount = parseFloat(document.getElementById("amount").value);
  var select = document.getElementById("select");
  var select1 = document.getElementById("select1");
  var result = document.getElementById("result");

// creating objects for rates 

var rates = {
    USD : {
      USD: 1,
      EUR: 0.88,
      DKK: 6.45,
      GPB: 0.76,
      JPY: 112.21
      },
    EUR : {
          EUR : 1,
          USD : 1.13,
          DKK : 7.47,
          JPY : 129.32,
          GPB : 0.88
          
          
      },
    GPB : { 
          GPB : 1,
          USD : 1.32,
          DKK : 8.46,
          EUR : 1.13,
          JPY : 146.74

      },

      DKK : {
          DKK: 1,
          USD : 0.16,
          EUR : 0.13,
          GPB : 0.12,
          JPY : 17.32

      },
      JPY : {
          JPY: 1,
          USD: 0.01,
          EUR: 0.01,
          GPB: 0.01,
          DKK: 0.06
}
// Creating an if statement in order to convert currencies 
}
//var countryCodes = ["JPY", "USD", "EUR", "GPB", "DKK"]
if(rates[select.value] && rates[select.value][select1.value]) {

var number = amount * rates[select.value][select1.value] 
      result.value = number + select1.value
  }
}

document.getElementById("amount").addEventListener("keyup", calculate);
document.getElementById("select").addEventListener("change", calculate);
document.getElementById("select1").addEventListener("change", calculate);