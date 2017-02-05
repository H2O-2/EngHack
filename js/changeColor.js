function changeColor() {
    //console.log("Change Color: " + $("span#tagList").text());

    var tags = [];
    var elementList = [];
    var elements = [];

    var tagString = $("span#tagList").text();
    var tagNameString = "";
    var $html = $("html");

    $("<canvas id='gameCanvas'></canvas>").prependTo("body").css({height: $html.height(), width: $html.width(), position: "absolute", top: 0, zIndex: 9999, background: "transparent"});

    for (var i = 0; i < tagString.length; i++) {
        var curChar = tagString[i];

        if ((curChar >= 'a' && curChar <= 'z') || (curChar >= 'A' && curChar <= 'Z') || (curChar > '0' && curChar <= '9')) {
            tagNameString += curChar;
        } else if (tagNameString.length > 0) {
            //tagList.push(tagNameString);
            tags[0] = tagNameString;
            tagNameString = "";
        } else {
            tagNameString = "";
        }
    }

    tags.push(tagNameString);
    console.log(tags);

    for (var j = 0; j < tags.length; j++) {
        elements = document.getElementsByTagName(tags[j]);
        if (elements.length > 0) {
            elementList.push(elements);
        } else {
            console.log(tags[j] + " DNE!");
        }
    }

    if(elementList.length === 0) {
        console.log("NO VALID ELEMENTS!");
        return;
    }

    console.log(elementList, elements);

    for (var list = 0; list < elementList.length; list++) {
        for (var e = 0; e < elementList[list].length; e++) {
            var curElement = $(elementList[list][e]),
                curChildren = curElement.children();
            oriColor.push(curElement.css("background"));
            curElement.css({background: "red", color: "transparent"});
            curChildren.css({color: "transparent"});
        }
    }
}


$(document).ready(function () {
    changeColor();
});

