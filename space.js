function kihagyas() {
    text = document.getElementById("sfield").value

    text = text.replace(/\s+/g, ' ');
    document.getElementById("eredmeny").innerHTML = text
}