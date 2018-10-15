
//CURRENCY CONVERTER

// Creating connection between HTML and Javascript

function uppercalculate() {
    console.log("uppercalculate call")
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
        GBP: 0.76,
        JPY: 112.21
    },
    EUR : {
        EUR : 1,
        USD : 1.13,
        DKK : 7.47,
        JPY : 129.32,
        GBP : 0.88
        
        
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
        GBP : 0.12,
        JPY : 17.32
  
    },
    JPY : {
        JPY: 1,
        USD: 0.01,
        EUR: 0.01,
        GBP: 0.01,
        DKK: 0.06
    }
    
    // Creating an if statement in order to convert currencies 
  }
  
  if(rates[select.value] && rates[select.value][select1.value])
    result.value = amount * rates[select.value][select1.value];
  }
  //CURRENCY CONVERTER - END