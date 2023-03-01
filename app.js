


var name =prompt("whats your name");
var gender =prompt("whats your gender male or female ");
if ( gender != "male" && gender!="female"){
    var welcom =confirm("are you wants to show the welcoming message")
    if (welcom==true){alert("welcom "+ name );} 
}
else if (gender == 'male' ){
    var welcom =confirm("are you wants to show the welcoming message")
if (welcom==true){alert("welcom Mr "+ name );}  
}
else if (gender == 'female' ){  
        var welcom =confirm("are yo wants to skip the welcoming message")
if (welcom==false){alert("welcom Ms "+ name );}  
}


do {
    var age =prompt("whats your age ");
    if (age<=0){alert("the age is less than or equal to zero plese input your age agine")}
  } while (age <=0);



