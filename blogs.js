function newEntry() {
    var div = document.createElement("div")
    var song = prompt("Enter the name of the song:");
    var review = "";
    var d = new Date();
    var date = d.getDate;
    var time = d.getTime;
    var user = "Name";
    if (song != null) {
        review = prompt("Enter your review of " + song + ":");
    }
    if (review != null) {
        div.innerHTML = "<br />" + "<b>Song Name:</b> " + "<br />" + song + "<br />" + "<b>Review: </b>" + "<br />" + review + "<br /><br />" + "<br /><b>Review by: </b>" + user + "<br />" + d + "<br /><br />";
        document.body.appendChild(div);
    }
    

    
}
