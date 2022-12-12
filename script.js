function changetext(){
    if (document.getElementById("temp").options[document.querySelector("#temp").selectedIndex].text=="F") {
        document.getElementById("24").innerHTML = "75";
        document.getElementById("18").innerHTML = "65";
        document.getElementById("27").innerHTML = "80";
        document.getElementById("19").innerHTML = "66";
        document.getElementById("21").innerHTML = "69";
        document.getElementById("16").innerHTML = "61";
        document.getElementById("26").innerHTML = "78";
        document.getElementById("21a").innerHTML = "70";
    }   else {
            document.getElementById("24").innerHTML = "24";
            document.getElementById("18").innerHTML = "18";
            document.getElementById("27").innerHTML = "27";
            document.getElementById("19").innerHTML = "19";
            document.getElementById("21").innerHTML = "21";
            document.getElementById("16").innerHTML = "16";
            document.getElementById("26").innerHTML = "26";
            document.getElementById("21a").innerHTML = "21";
}
}

function remove() {
    document.getElementById("cookies").remove();
}