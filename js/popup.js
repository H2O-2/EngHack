var changed = false;

$(document).ready(function () {
    document.getElementById('id').addEventListener('click', hello);
});

function hello() {
    console.log("RAN");
    var tagString = $("#tagName").val();
    var tagNameString = "";
    for (var i = 0; i < tagString.size(); i++) {
        var curChar = tagString[i];
        tagNameString = "";

        if ((curChar > 'a' && curChar < 'z') && (curChar > 'A' && curChar < 'Z')) {
            tagNameString += curChar;
        }
    }

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
