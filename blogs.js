function newEntry() {
    //textbox for name of song
    document.getElementById("songname").append("Name of Song:\n");
    var nameOfSong = document.createElement("INPUT");
    nameOfSong.setAttribute("type", "text");
    nameOfSong.setAttribute("value", "");
    
    document.getElementById("songname").appendChild(nameOfSong);
    
    //textbox for review
    document.getElementById("review").append("Review:\n");
    var review = document.createElement("INPUT");
    review.setAttribute("type", "text");
    review.setAttribute("value", "");
        
    document.getElementById("review").appendChild(review);
    
    //create save button
    var button = document.createElement("button");
    button.innerHTML = "save"; 

    //save feature
    button.addEventListener("click", function() {
        document.getElementById("title").innerHTML = nameOfSong.value;
        document.getElementById("reviewtext").innerHTML = review.value;
        var date = new Date();
        document.getElementById("time").innerHTML = date;
    });
    
    document.getElementById("save").appendChild(button);
    

}


