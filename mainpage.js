
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


  // API collect rates 
//first we make a class currency for the names of the currencies and the rates
class Currency{
    constructor(name, rate){
        this.name = name;
        this.rate = rate;
    }
}

// get the most recent exchange rates via the "live" endpoint:
newAjax("http://www.apilayer.net/api/live?access_key=9ca6ed5b9c0a228d45664d2b9c05111b");

function newAjax(url){
    var xmlhttp;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callbackFunc(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function callbackFunc(response){

    var currencies = JSON.parse(response);
    var currencies_keys = Object.keys(currencies.quotes);
    var currencies_values = Object.values(currencies.quotes);

    var currencyFrom = document.getElementById("currencyFrom");
    var currencyTo = document.getElementById("currencyTo");
    var html = "";

//We make an array of our currencies
    var currenciesList = [];

    for(i=0; i < currencies_keys.length; i++){
        if(i == 0){
            var currency = currencies_keys[i].substring(0,3);
            html += "<option value='" + currency + "'>" + currency + "</option>";                
        }

        var currency = currencies_keys[i].substring(3,6);
        var rate = currencies_values[i];

        var currencyObject = new Currency(currency, rate);
        currenciesList.push(currencyObject);

        html += "<option value='" + currency + "'>" + currency + "</option>";
    }
//local storage
    localStorage.setItem("currencies", JSON.stringify(currenciesList));

    currencyFrom.innerHTML = html;
    currencyTo.innerHTML = html;
    

}