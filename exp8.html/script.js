const paragraph = document.getElementById("myParagraph");

window.addEventListener("scroll", function () {

    let scrollPosition = window.scrollY;

    if (scrollPosition < 300) {
        paragraph.style.color = "black";
        paragraph.style.fontWeight = "normal";
        paragraph.style.fontStyle = "normal";
        paragraph.style.fontFamily = "Arial";
        paragraph.style.fontSize = "25px";

    } else if (scrollPosition < 700) {

        paragraph.style.color = "blue";
        paragraph.style.fontWeight = "bold";
        paragraph.style.fontStyle = "normal";
        paragraph.style.fontFamily = "Georgia";
        paragraph.style.fontSize = "27px";

    } else if (scrollPosition < 1100) {

        paragraph.style.color = "purple";
        paragraph.style.fontWeight = "normal";
        paragraph.style.fontStyle = "italic";
        paragraph.style.fontFamily = "Verdana";
        paragraph.style.fontSize = "29px";

    } else {

        paragraph.style.color = "crimson";
        paragraph.style.fontWeight = "bold";
        paragraph.style.fontStyle = "italic";
        paragraph.style.fontFamily = "Georgia";
        paragraph.style.fontSize = "31px";

    }

});