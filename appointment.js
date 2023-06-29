function myFunction(){
    let one = document.getElementById("cancel");
    one.onclick = window.alert("Your appointment has been canceled");
}
function myFunction1(){
    let two = document.getElementById("reschedule");
    two.onclick = window.alert("Kindly book a new appointment to reschedule");
}

function book(){
    let pick = document.getElementById("bookanappointment");
    pick.onclick = window.alert("Your appointed has been submitted for approval");
}