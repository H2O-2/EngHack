var changed = false;

$(document).ready(function () {
    document.getElementById('id').addEventListener('click', hello);
});

function hello() {
    console.log("RAN");

    var tagString = $("#tagName:text").val();
    console.log($.type(tagString));
    var tagNameString = "";
    for (var i = 0; i < tagString.length; i++) {
        var curChar = tagString[i];

        if ((curChar >= 'a' && curChar <= 'z') || (curChar >= 'A' && curChar <= 'Z') || (curChar > '0' && curChar <= '9')) {
            tagNameString += curChar;
        } else if (tagNameString.length > 0) {
            tagList.push(tagNameString);
            tagNameString = "";
        } else {
            tagNameString = "";
        }
    }

    tagList.push(tagNameString);
    console.log(testArr);


    if (!changed) {
        chrome.tabs.executeScript({
            file: 'js/changeColor.js'
        });
        changed = true;
    } else {
        chrome.tabs.executeScript({
            file: 'js/resetColor.js'
        });
        changed = false;
    }
}

/*
$(document).ready(function () {
    $("#TEST").click(function () {
        console.log("IN");
        chrome.tabs.executeScript({
            file: 'changeColor.js'
        });
    });
});

*/
