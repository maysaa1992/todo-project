


var name =prompt("whats your name");
var gender =prompt("whats your gender male or female ");


if (gender.toLowerCase() === 'male' ){
    var welcom =confirm("are you wants to show the welcoming message")
if (welcom==true){alert("welcom Mr "+ name );}  
}
else if (gender.toLowerCase() === 'female' ){  
        var welcom =confirm("are yo wants to skip the welcoming message")
if (welcom==true ){alert("welcom Ms "+ name );}  
}
else if ( gender.toLowerCase() !== "male" && gender.toLowerCase() !=="female"){
    var welcom =confirm("are you wants to show the welcoming message")
    if (welcom==true){alert("welcom "+ name );} }

do {
   var age =prompt("whats your age ");
   if (age<=0){alert("the age is less than or equal to zero plese input your age agine")}
  } while (age <=0);





  var arrQuastion =[];
  function promtQustion ( textOf )
  {
    var valOFQustion = prompt(textOf);
    return valOFQustion;
  }
  function comparValQustion( Value )
  {
    if (Value.toLowerCase() === "yes" || Value.toLowerCase() ==="no"){arrQuastion.push(Value);}
    else {
       Value ="invalid";
       arrQuastion.push(Value);
       }
  }
         function printArray(){
           for (let i=0; i<arrQuastion.length;i++){
            console.log(arrQuastion[i]);
           }
        }


         var valueQustion1=  promtQustion("Did you graduate from university? plese answer yes or no ");
         comparValQustion(valueQustion1);
         var valueQustion2=  promtQustion("Have you graduated from the Faculty of Information Technology? plese answer yes or no ");
         comparValQustion(valueQustion2);
         var valueQustion3=  promtQustion("Did you work after graduation? plese answer yes or no  ");
         comparValQustion(valueQustion3);
         printArray();
        // console.log("Hello");