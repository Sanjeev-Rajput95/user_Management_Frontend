function button() {
    let first_Name = document.getElementById("fname").value
    let last_Name = document.getElementById("lname").value
    let Email = document.getElementById("email").value
    let Address = document.getElementById("address").value
    let pin = document.getElementById("pin").value


    let data = {
        firstName: first_Name,
        lastName: last_Name,
        email: Email,
        address: Address,
        pin: pin,
    }
    if (data.firstName == "") {
        document.getElementById("fname_error").innerHTML = "first Name required!"

    }
    if (data.lastName == "") {
        document.getElementById("lname_error").innerHTML = "last Name required!"
    }
    if (data.email == "") {
        document.getElementById("email_error").innerHTML = "email name required!";
    }
    if (data.address == "") {
        document.getElementById("address_error").innerHTML = "address required"
    }
    if (data.pin == "") {
        document.getElementById("pin_error").innerHTML = "pin required!"
    }

    console.log(data);
    const table = document.querySelector('table');

    /* Insert new row */
    const row = table.insertRow();

    /* Insert cells (td) for row */
    const td0 = row.insertCell(0);
    const td1 = row.insertCell(1);
    const td2 = row.insertCell(2);
    const td3 = row.insertCell(3);
    const td4 = row.insertCell(4);
    /* Populate cells with data */
    td0.innerText = first_Name;
    td1.innerText = last_Name;
    td2.innerText = Email;
    td3.innerText =  Address;
    td4.innerText =  pin;




}
