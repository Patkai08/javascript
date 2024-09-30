function jelszo() {
    hossz = 20;
    karakterek = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678"
    jel = ""
    for (i = 0, n = karakterek.length; i < hossz; ++i)
        jel += karakterek.charAt(Math.floor(Math.random()* n));
        document.getElementById("eredmeny").innerHTML = jel;
    }

    