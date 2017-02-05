var changed = false;

$(document).ready(function () {
    document.getElementById('gameButton').addEventListener('click', runGame);
    if ($("canvas#gameCanvas").length) {
        console.log($("canvas#gameCanvas"));
        $("button#gameButton").text("END");
        $("input#tagName").prop('disabled', true);
    }
});

function runGame() {
    var tagString = $("input#tagName:text").val();
    console.log(tagString);
    $("span#tagList").text(tagString);

    if (!changed) {
        $("button#gameButton").text("END");
        $("input#tagName").prop('disabled', true);
        chrome.tabs.executeScript({
            code: '$("span#tagList").text(' + '\'' + tagString + '\'' + ')'
        }, function () {
            chrome.tabs.executeScript({
                file: 'js/changeColor.js'
            })
        });
        changed = true;
    } else {
        $("button#gameButton").text("START");
        $("input#tagName").prop('disabled', false);
        chrome.tabs.executeScript({
            file: 'js/resetColor.js'
        });
        changed = false;
    }
}
