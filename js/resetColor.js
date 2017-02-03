function resetColor() {
    console.log("red");
    var list = document.getElementsByTagName("table");

    if(list === null) {
        console.log("NO TABLE");
        return;
    }

    list[0].style.background = oriColor;
}

resetColor();
