
let form = document.getElementById("form");
form.addEventListener("submit" , function(event){
 event.preventDefault();
})

let clickBtn = document.getElementById("submit");
clickBtn.addEventListener("click", clickHandler);

function clickHandler(){
  let firstName = document.getElementById("first-name").value;
  let lastName=document.getElementById("last-name").value;
  let address=document.getElementById("address").value;
  let pincode=document.getElementById("pincode").value;
  let gender=document.getElementsByName("gender");
  var chkbx = document.querySelectorAll('input[type=checkbox]:checked');
 let state = document.getElementById("state").value;
  let country =document.getElementById("country").value;


  var gendervalue=[];
  for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked==true) {
          gendervalue.push(gender[i].value);
          console.log(gendervalue);
      }
  }

  var array = [];
for (var i = 0; i < chkbx.length; i++) {
    array.push(chkbx[i].value);
    }



  if(!firstName)
   {
       alert("Name cannot be Empty. Please! Enter the Firstname.")
     
   } 
   else if(!lastName)
   {
       alert("Name cannot be Empty. Please! Enter the Lastname.");
      
   }
   else if(gendervalue.length != 1)
   {
       alert("Gender cannot be Empty. Please!!! select the gender.");
     
   }
     
  else if (array.length < 2) {
    alert("select atleast 2 food items");
    
  }
   else if(!address)
   {
       alert("Address cannot be Empty. Please! Enter the Address.");
     
   }
   else if(!pincode)
   {
       alert("Pincode cannot be Empty. Please! Enter the Pincode.");
      
   }
   else if(pincode.length!==6)
   {
       alert("Enter the valid Pincode.");
    
   }
 else if(!state)
   {
       alert("State cannot be Empty. Please! Enter the State.");
      
   }
   else if (!country)
   {
       alert("Country cannot be Empty. Please! Enter the Country.");
     
   }
 else{
    let tbl = document.getElementById("tbody");
    let row = tbl.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

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
}


    
   