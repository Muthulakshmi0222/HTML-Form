function countCheckBox(){
    const check=document.getElementsByName("Check_items");
    var numberOfCheckedItems=0;
    var txt="";
    for(i=0;i<check.length;i++){
        if(check[i].checked)
        numberOfCheckedItems++;
        }
    if(numberOfCheckedItems >3){
        alert("You can't select more than three");
        return false;
        }
    }


var Submit = document.getElementById("entry");
Submit.addEventListener("click",displayDetails);

var row=1;
function displayDetails(){
    var Fname=document.getElementById("Fname").value;
    var Lname=document.getElementById("Lname").value;
    var address=document.getElementById("address").value;
    var pincode=document.getElementById("pincode").value;
    var gender=document.getElementById("gender").value;
    var state=document.getElementById("state").value;
    var country=document.getElementById("country").value;
    var check=document.querySelector("txt");
    if(!Fname || !Lname || !address || !pincode || !gender || !state ||!country){
        alert("Kindly fill the details");
        return;
    }
    var display=document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    var cell7=newRow.insertCell(6);
    var cell8=newRow.insertCell(7);

    cell1.innerHTML=Fname;
    cell2.innerHTML=Lname;
    cell3.innerHTML=address;
    cell4.innerHTML=pincode;
    cell5.innerHTML=gender;
    cell6.innerHTML=state;
    cell7.innerHTML=country;
    cell8.innerHTML=check;
    row++;
}
