var pTags = document.querySelectorAll("p");

function getColor(element) {
    for(var i =0; i<pTags.length; i++) {
        pTags[i].style.color = element.value;
    }
}
