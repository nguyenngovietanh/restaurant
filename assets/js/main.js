const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const scroll = document.getElementById("scroll");

toggle.onclick = () => {
    toggle.classList.toggle("fa-times");
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
    scroll.classList.toggle("active");
}

function content(x) {
    if (x == 0) {
        document.getElementById("form").style.display = "block";
        document.getElementById("contactInfo").style.display = "none";
    } else {
        document.getElementById("form").style.display = "none";
        document.getElementById("contactInfo").style.display = "block";
        document.getElementById("contactInfo").style.opacity = "1";
    }
}

let fname = document.querySelector("#fname");
let errorName = document.getElementById("error_name");

let phoneNumber = document.querySelector("#phone_number");
let errorPhoneNumber = document.getElementById("error_phone_number");

let email = document.querySelector("#email");
let errorEmail = document.getElementById("error_email");

let guests = document.querySelector("#guests");
let errorGuests = document.querySelector("#error_guests");

let date = document.querySelector("#date");
let errorDate = document.querySelector("#error_date");

let time = document.querySelector("#time");
let errorTime = document.querySelector("#error_time");

let note = document.querySelector("#note");
let form = document.querySelector("#form");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let pn = /^\d{10}$/;
let arrInput;

function submitForm() {
    arrInput = [
        { 'Name': fname.value },
        { 'Phone Number': phoneNumber.value },
        { 'Email': email.value },
        { 'Guests': guests.value },
        { 'Date': date.value },
        { 'Time': time.value },
        { 'Note': note.value }
    ]

    if (fname.value == "") {
        errorName.style.display = "block";
    } else if (!fname.value == "") {
        errorName.style.display = "none";
    } 
    
    if (phoneNumber.value == "") {
        errorPhoneNumber.style.display = "block";
    } else if (!phoneNumber.value.match(pn)) {
        errorPhoneNumber.style.display = "block";
        errorPhoneNumber.innerText = "Please enter a valid phone number";
    } else if (!phoneNumber.value == "" && phoneNumber.value.match(pn)) {
        errorPhoneNumber.style.display = "none";
    }

    if (email.value == "") {
        errorEmail.style.display = "block";
    } else if (!email.value.match(regExp)) {
        errorPhoneNumber.style.display = "block";
        errorEmail.innerText = "Please enter a valid email address";
    } else if (!email.value == "" && email.value.match(regExp)){
        errorEmail.style.display = "none";
    }
    
    if (guests.value == "" || guests.value == 0) {
        errorGuests.style.display = "block";
    } else {
        errorGuests.style.display = "none";
    }
    
    if (date.value == "") {
        errorDate.style.display = "block";
    } else {
        errorDate.style.display = "none";
    }
    
    if (time.value == "") {
        errorTime.style.display = "block";
    } else {
        errorTime.style.display = "none";
    }


    
    if (!fname.value == "" && !phoneNumber.value == "" 
        && phoneNumber.value.match(pn) && !email.value == "" 
        && email.value.match(regExp) && !guests.value == "" 
        && !guests.value == 0 && !date.value == "" 
        && !time.value == "") {
        swal({
            title: "Congratulations",
            text: "Congratulations, you have successfully booked your table!",
            icon: "success",
        }).then(ok => {
            if (ok) {
                window.location.reload();
            }
        })
        for (let i = 0; i < arrInput.length; i++) {
            console.log(arrInput[i]);
        }
    }
}

