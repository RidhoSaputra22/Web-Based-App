//createdBy: Ridho Saputra

var numberDisplay = "";
var consoleDisplay = "";
function displayNumber(num){
    if(check()){
        numberDisplay = numberDisplay;
        consoleDisplay = consoleDisplay;
    }else{
        numberDisplay += num;
        consoleDisplay += num;
        document.getElementById('num-display').innerHTML = numberDisplay;
     
    }

}

function AC(){

    numberDisplay = ""
    consoleDisplay = ""
    document.getElementById('num-display').innerHTML = "0";
}

function sum(){
    numberDisplay = ""
    consoleDisplay += " + "
    document.getElementById('num-display').innerHTML = "0";
}

function sub(){

    numberDisplay = ""
    consoleDisplay += " - "
    document.getElementById('num-display').innerHTML = "0";
}

function div(){

    numberDisplay = ""
    consoleDisplay += " / "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function mul(){

    numberDisplay = ""
    consoleDisplay += " * "
    document.getElementById('num-display').innerHTML = "0";
    document.getElementById('test').innerHTML = consoleDisplay;
}

function sqrt(){
    numberDisplay = "sqrt()"
    consoleDisplay = " Math.sqrt() "
}

function equal(){
    let ans = eval(consoleDisplay);
    numberDisplay = ""
    numberDisplay += ans;
    consoleDisplay += " = " + numberDisplay;
    
    document.getElementById('num-display').innerHTML = numberDisplay
    document.getElementById('test').innerHTML = consoleDisplay
}

function check(){
    if(numberDisplay.length == 12){
        return true;
    }

    return false;
}

// test 
function test(){
    window.alert("WORK")
}