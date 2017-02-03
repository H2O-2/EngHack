function changeColor() {
    console.log("red");
    var list = document.getElementsByTagName("table");

    if(list === null) {
        console.log("NO TABLE");
        return;
    }

    oriColor = list[0].style.background;
    list[0].style.background = "red";
}

changeColor();
