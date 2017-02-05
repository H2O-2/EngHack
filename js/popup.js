var changed = false;

$(document).ready(function () {
    document.getElementById('id').addEventListener('click', hello);
});

function hello() {
    var tagString = $("input#tagName:text").val();
    console.log(tagString);
    $("span#tagList").text(tagString);
/*
    var tagString = $("#tagName:text").val();
    var tagNameString = "";
    for (var i = 0; i < tagString.length; i++) {
        var curChar = tagString[i];

        if ((curChar >= 'a' && curChar <= 'z') || (curChar >= 'A' && curChar <= 'Z') || (curChar > '0' && curChar <= '9')) {
            tagNameString += curChar;
        } else if (tagNameString.length > 0) {
            //tagList.push(tagNameString);
            tagList[0] = tagNameString;
            tagNameString = "";
        } else {
            tagNameString = "";
        }
    }

    tagList.push(tagNameString);
    console.log(tagList);
*/

    if (!changed) {
        chrome.tabs.executeScript({
            //code: "document.getElementById('tagList').innerHtml = " + "\"" + tagString + "\"" + ";"
            code: '$("span#tagList").text(' + '\'' + tagString + '\'' + ')'
        }, function () {
            chrome.tabs.executeScript({
                file: 'js/changeColor.js'
            })
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
