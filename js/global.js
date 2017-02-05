var oriColor = [];

var testArr = [1, 2, 3];

console.log("global");

$(document).ready(function () {
    $("<span id='tagList'></span>").appendTo("body").css({display: "none"});
    $("<span id='tagList'></span>").change(function () {
        console.log("changed");
    })
});

