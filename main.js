function validation(){
 


var x = document.forms["form"]["userid"].value;
 
var l = x.length;


var msg;


if (x == "") {


msg="User id must be filled out"


document.getElementById["usererror"].innerHTML=msg;






}


else if (l<5 || l>12){


alert("User id must be of length 5 to 12");






}


l=document.forms["form"]["password"].value.length;


if(l==0){


alert("enter the password")


}


else if(l<7 || l>12){


alert("password must be of length 7 to 12")
 
}


var y=document.forms["form"]["name"].value;






if(y=="") {


alert("enter the name");


}else if(!((/[a-zA-Z]/).test(y))){


alert("name should contain alphabets only")


}


var z=document.forms["form"]["country"].value;






if(z=="") {


alert("enter a country");


}






x=document.forms["form"]["zipcode"].value;
 






if(x=="") {
 
alert("enter the ZIP Code");


}else if(!((/[0-9]/).test(x))){


alert("ZIP Code should only contain numbers")


}











if(!(document.getElementById('male').checked || document.getElementById('female').checked)) {

alert("enter your sex");


}







if(!(document.getElementById('english').checked || document.getElementById('nonenglish').checked)){

alert("choose the language known");


}


}
