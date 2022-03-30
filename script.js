
let form = document.getElementById("form");
form.addEventListener("submit" , function(event){
 event.preventDefault();
})

let clickBtn = document.getElementById("submit");
clickBtn.addEventListener("click", clickHandler);

function clickHandler(){
    let tbl = document.getElementById("tbody");
    let row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();

  let firstName = document.getElementById("first-name").value;
  let lastName=document.getElementById("last-name").value;
  let address=document.getElementById("address").value;
  let pincode=document.getElementById("pincode").value;
  let gender=document.getElementsByName("gender");
  var chkbx = document.querySelectorAll('input[type=checkbox]:checked');
 let state = document.getElementById("state").value;
  let country =document.getElementById("country").value;


  if(!firstName)
   {
       alert("Name cannot be Empty. Please! Enter the Firstname.")
       return false;
   } 
   else if(!lastName)
   {
       alert("Name cannot be Empty. Please! Enter the Lastname.");
       return false;
   }
  else if(!address)
   {
       alert("Address cannot be Empty. Please! Enter the Address.");
       return false;
   }
   else if(!pincode)
   {
       alert("Pincode cannot be Empty. Please! Enter the Pincode.");
       return false;
   }
   else if(pincode<6)
   {
       alert("Pincode Enter the valid Pincode.");
       return false;
   }
   else if(!state)
   {
       alert("State cannot be Empty. Please! Enter the State.");
       return false;
   }
   else if(!country)
   {
       alert("Country cannot be Empty. Please! Enter the Country.");
       return false;
   }

   var gendervalue;
   for (let i = 0; i < gender.length; i++) {
       if (gender[i].checked) {
           console.log(gender[i].checked);
           gendervalue = gender[i].value;
           console.log(gendervalue);
       }
   }
   
   if(gender[0].checked === false && gender[1].checked === false && gender[2].checked === false)
   {
       alert("Gender cannot be Empty. Please!!! select the gender.");
       return false;
   }
  
   if (chkbx.length < 2) {
    alert("select atleast 2 food items");
    return false;
  }

var array = [];
for (var i = 0; i < chkbx.length; i++) {
    array.push(chkbx[i].value);
    }
cell1.innerHTML = firstName;
cell2.innerHTML = lastName;
cell3.innerHTML = address;
cell4.innerHTML = pincode;
cell5.innerHTML = gendervalue;
cell6.innerHTML = array;
cell7.innerHTML = state;
cell8.innerHTML = country;
alert("Thank You, Form's data is saved.!!!");

form.reset(); //reset the form if every data is collected.
}


    
   