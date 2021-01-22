var xmlhttp = new XMLHttpRequest();
var table="<tr><th>Songs</th><th>Artist</th></tr>";

var curRow = document.createElement("TR");
curRow.innerHTML = "<th>Songs</th><th>Artist</th>";
document.getElementById("table").append(curRow);

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var songsJSON = JSON.parse(this.responseText);
    var songs = songsJSON;
    console.log(songsJSON["songs"]);

    for (var i = 0; i < songsJSON["songs"].length; i++) {
        var curRow = document.createElement("TR");
        curRow.setAttribute("data-href", songs["songs"][i]["href"]);

        var curRowText = "";
        curRowText += "<td>";
        curRowText += songs["songs"][i]["name"];
        curRowText +=  "</td><td>";
        curRowText += songs["songs"][i]["artist"];
        curRowText += "</td>";
        curRow.innerHTML = curRowText;
        document.getElementById("table").append(curRow);
    }


    const rows = document.querySelectorAll("tr");
    console.log(rows);

    rows.forEach(row => {
        row.addEventListener("click", () => {
        window.location.href = row.dataset.href;
        })
    })
        
    }
};
xmlhttp.open("GET", "songs.json", true);
xmlhttp.send();