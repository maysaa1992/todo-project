


var name =prompt("whats your name");
var gender =prompt("whats your gender male or female ");
if ( gender != "male" && gender!="female"){
    var welcom =confirm("are yo wants to skip the welcoming message")
    if (welcom==false){alert("welcom "+ name );} 
}
else if (gender == 'male' ){
    var welcom =confirm("are yo wants to skip the welcoming message")
if (welcom==false){alert("welcom Mr "+ name );}  
}
else if (gender == 'female' ){  
        var welcom =confirm("are yo wants to skip the welcoming message")
if (welcom==false){alert("welcom Ms "+ name );}  
}


    
var age =prompt("whats your age ");
if (age<=0){alert("the age is less than or equal to zero")}







