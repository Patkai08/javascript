function kihagyas() {
    text = document.getElementById("tfield").value;
    spaces = 0;
    for (var i = 0; i < text.length;i++) {
        if (text[i] === " ") {
            spaces++
        }
    }
    document.getElementById("eredmeny").innerHTML = spaces
}