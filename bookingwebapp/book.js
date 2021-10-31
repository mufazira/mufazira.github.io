let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userPlace = document.getElementById("userPlace")
    let userPlaceVal = userPlace.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal, userPlaceVal)
})

function BookNow(userName, userEmail, userPax, userRemarks, userPlace) {
    //console.log(userName)
    //console.log(userEmail)
    //console.log(userPax)
    //console.log(userRemarks)
    let url = 'https://api.sheety.co/285c3918d7ca9b740838fc9cc4de273a/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            place: userPlace,
            remarks: userRemarks
        }
    }
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name = " added in the booking list")
        });
}