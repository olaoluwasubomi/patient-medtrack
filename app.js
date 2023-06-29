
    let one = document.getElementById("bugg");
    let two = document.getElementById("open");
    let three = document.getElementById("remove");


    one.onclick = function(){
        two.style.display = "block";
        one.style.display = "none";
        three.style.display = "block";
    }

    three.onclick = function(){
        one.style.display = "block";
        two.style.display = "none";
        three.style.display = "block";
    }
