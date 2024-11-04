function data(){

var a = document.getElementById("t1").value;
var b = document.getElementById("t2").value;
var c = document.getElementById("t3").value;
var d = document.getElementById("t4").value;

if(a==" "||b==" "||c==" "||d==" "){
    alert("please all field are required");
    return false;
}

else if(b.length<10||b.length>10){
    alert("number should be of 10 digit ! please enter valid number");
    return false;
}

else if(isNaN(b)){
    alert("only number are allow");
    return false;
}

else if(c!=d){
    alert("please enter same password");
    return false;
}

else{
    return true;
}
}
