

var welcom =confirm("are yo wants to skip the welcoming message")
if (welcom==false){
var name =prompt("whats your name");
var gender =prompt("whats your gender male or female ");
if (gender == 'male' ){
    alert("welcom Mr"+ name );
}
else {
    if (gender == 'female' ){
        alert("welcom Ms"+ name );
}
else{ alert("welcom " + name )}
}
    
var age =prompt("whats your age ");
if (age<=0){alert("the age is less than or equal to zero")}

}





  /*  var age =prompt("whats your age ");
    if (age>0 && age!=0){ alert("welcom")}
    else {alert("plese check your age ");
    var age =prompt("whats your age ");
    if (age>0 && age!=0){alert("welcom")}
}
}
else {alert("plese enter male or female");

var gender =prompt("whats your gender male or female ");
if (gender == 'male' || gender == 'female'){  
    var age =prompt("whats your age ");
    if (age>0 && age!=0){  alert("wlcome ")}
    else {alert("plese check your age");
    var age =prompt("whats your age ");
    if (age>0 && age!=0){alert("welcom")}
}
}
}*/

