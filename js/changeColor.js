function changeColor() {
    //var elementList = document.getElementsByTagName("table");

    var elementList = [];
    var element = [];

    for (var i = 0; i < tagList.length; i++) {
        element = document.getElementsByTagName(tagList[i]);
        if (element.length > 0) {
            elementList.push(element);
        } else {
            console.log(tagList[i] + " DNE!");
        }
    }

    if(elementList === null) {
        console.log("NO ELEMENTS!");
        return;
    }

    console.log(testArr);

    elementList.forEach(function (list) {
        element.forEach(function (e) {
            oriColor.push(e.style.background);
            e.style.background = "red";
        });
    });

    //oriColor = elementList[0].style.background;
    //elementList[0].style.background = "red";
}
console.log("red");

changeColor();
