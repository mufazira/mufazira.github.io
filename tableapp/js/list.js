let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    //console.log("refreshNowBtn clicked!")
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/285c3918d7ca9b740838fc9cc4de273a/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")

            //gather all button ids
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheet API
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;
                let btnId = "delete" + gId;

                //add permission to the row
                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = "<button id=" + btnId + " type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                //console.log(bookingIds[j]) - check ids inside the array
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    //console.log(el.id + " clicked!")
                    let theId = el.id.replace("delete", "")
                    //console.log(theId)
                    //send id to new function
                    DeleteBooking(theId)
                })
            }
        });
}

function DeleteBooking(id) {
    //console.log("received id = " + id)
    let url = 'https://api.sheety.co/285c3918d7ca9b740838fc9cc4de273a/bookingApp/bookings/' + id;
    fetch(url, {
            method: 'DELETE',
        })
        //.then((response) => response.json()) - no response from the server (need to delete)
        .then(() => {
            //console.log('Object deleted');
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}