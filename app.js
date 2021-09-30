var userList = []
function populate_Table(userData) {
    var table = document.getElementById("userTable")
    table.innerHTML=""
   // if(userList.length == 1) {
    var col = `<tr id="tr"> 
    <th> ID</th>
    <th> firstName</th>
    <th>lastName</th>
    <th>email</th>
    <th>address</th>
    <th> pin</th>` +
        "<th> editData</th>" +
        "<th> deleteData</th>" +
        "</tr>";
        table.innerHTML += col;
  //  }
    
    
    for (let i = 0; i < userData.length; i++) {
       
        var row = `<tr id="tr"> 
        <td>${userData[i].id}</td>
        <td>${userData[i].firstName}</td>
        <td>${userData[i].lastName}</td>
        <td>${userData[i].email}</td>
        <td>${userData[i].address}</td>
        <td>${userData[i].pin}</td>` +
            "<td><i class=\"fas fa-user-edit\" data-toggle=\"modal\" data-target=\"#exampleModalLong\"  onclick=\"editData('" + userData[i].id + "')\"></i></td>" +
            "<td> <i class=\"fas fa-user-times\" onclick=\"deleteData('" + userData[i].id + "')\"></i> </td>" +
            "</tr>";

        table.innerHTML += row;
    }
}

function button() {

    let first_Name = document.getElementById("fname").value
    let last_Name = document.getElementById("lname").value
    let Email = document.getElementById("email").value
    let Address = document.getElementById("address").value
    let pin = document.getElementById("pin").value

    let data = {
        id: userList.length + 1,
        firstName: first_Name,
        lastName: last_Name,
        email: Email,
        address: Address,
        pin: pin,
    }
    userList.push(data);
    let validate = fun(data);
    if (validate == true) {
        populate_Table(userList);
        document.getElementById("fname").value = " "
        document.getElementById("lname").value = " "
        document.getElementById("email").value = " "
        document.getElementById("address").value = " "
        document.getElementById("pin").value = " "
        // const table = document.querySelector('table');     // need to read

        // /* Insert new row */
        // const row = table.insertRow();
        // /* Insert cells (td) for row */
        // const td0 = row.insertCell(0);
        // const td1 = row.insertCell(1);
        // const td2 = row.insertCell(2);
        // const td3 = row.insertCell(3);
        // const td4 = row.insertCell(4);
        // const td5 = row.insertCell(5);
        // const td6 = row.insertCell(6);
        // const td7 = row.insertCell(7);


        // /* Populate cells with data */
        // td0.innerText = data.length;
        // td1.innerText = data.firstName;
        // td2.innerText = data.lastName;
        // td3.innerText = data.Email;
        // td4.innerText = data.Address;
        // td5.innerText = data.pin;

        // td6.setAttribute('id', 'td0')
        // document.getElementById('td0').innerHTML = " <div onclick=\"editData()\"> <i class=\"fas fa-pencil-alt\"></i> </div>"
        // td.setAttribute('id', 'td1')
        // document.getElementById('td1').innerHTML = "<i class=\"fas fa-trash-alt\"></i>"

        // let submitB_button = document.getElementById('onSubmit')
        // //  both set attribute  are working for closing the modal 
        // submitB_button.setAttribute("data-bs-dismiss", "modal")
        // submitB_button.setAttribute("aria-label", "Close")
    }
}

function editData(user) {
    //   1. first filter the data which has this ID
    //   2. get all the information from json and put into all the input box
     
    console.log("hello i am edit", user);
    for(let i=0;i<userList.length;i++) {
        if(user == userList[i].id) {
            document.getElementById("fname").value=userList[i].firstName
            document.getElementById("lname").value=userList[i].lastName
            document.getElementById("email").value=userList[i].email
            document.getElementById("address").value=userList[i].address
            document.getElementById("pin").value=userList[i].pin
            
        }
    }
}

function deleteData(user) {
    //   1. first filter the data which has this ID
    //   2. get all the information from json and put into all the input box
     
    
    for(let i=0;i<userList.length;i++) {
        
        if(user == userList[i].id) {
            // document.getElementById("fname").value=userList[i].firstName
            // document.getElementById("lname").value=userList[i].lastName
            // document.getElementById("email").value=userList[i].email
            // document.getElementById("address").value=userList[i].address
            // document.getElementById("pin").value=userList[i].pin
            console.log("hello world")
            userList.splice(i,1)
            
        }
    }
    console.log(userList)
    populate_Table(userList);
}


function fun(object) {

    let flag = true;
    if (object.firstName == "") {
        // .innerhtml is insert the value in the html attribute
        document.getElementById("fname_error").innerHTML = "first Name required!"
        flag = false;
    }
    if (object.lastName == "") {
        flag = false;
        document.getElementById("lname_error").innerHTML = "last Name required!"
    }
    if (object.email == "") {
        flag = false;
        document.getElementById("email_error").innerHTML = "email name required!";
    }
    if (object.address == "") {
        flag = false;
        document.getElementById("address_error").innerHTML = "address required"
    }
    if (object.pin == "") {
        flag = false;
        document.getElementById("pin_error").innerHTML = "pin required!"
    }
    return flag;
}
