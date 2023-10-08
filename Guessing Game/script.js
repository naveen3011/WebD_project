var count = 5;

var y = String.fromCharCode(Math.floor(Math.random() * 26 + 65)).toLowerCase();

var word = document.querySelector(".input").value;



var timeleft = 3;



function inputUpdate() {
    document.querySelector(".input-container").style.display = "block";

    document.querySelector(".input").innerHTML = "";

    document.querySelector(".input").value = "";

    document.querySelector(".input").style.display = "block";

    document.querySelector(".input").focus();

    document.querySelector(".result").style.display = "none";

}



function gucessUpdate() {



    document.querySelector(".gucess").style.display = "block";

    document.querySelector(".count").innerHTML = count;

}



function hide() {



    count = 5;

    document.querySelector(".btn").style.display = "none";

    document.querySelector(".contents").style.display = "flex";

    document.querySelector(".contents").innerHTML = "Enter the Alphabet A - Z"

    document.querySelector(".contents").style.color = "#c2bcbc";

    inputUpdate();

    gucessUpdate();

}



function start() {



    document.querySelector(".input-container").style.display = "none";

    document.querySelector(".input").style.display = "none";

    document.querySelector(".btn").style.display = "flex";

    document.querySelector(".contents").style.display = "none";

    document.querySelector(".gucess").style.display = "none";

}



function restart() {



    count = 5;

    y = String.fromCharCode(Math.floor(Math.random() * 26 + 65)).toLowerCase();



    document.querySelector(".gucess").style.display = "none";

    document.querySelector(".input-container").style.display = "none";

    document.querySelector(".btn").style.display = "flex";

    document.querySelector("#btn").classList.add("btn1");

}



function counter() {



    window.setTimeout(function () {


        inputUpdate();

        document.querySelector(".result").style.display = "none";

    }, 3000);



}



function wrongUpdate() {



    document.querySelector(".result").style.display = "block"

    word = document.querySelector(".input").value;

    document.querySelector(".input").style.display = "none";

    document.querySelector(".wrong").style.display = "block";

    document.querySelector(".wrong").innerHTML = word.toUpperCase();

}



function check() {



    word = document.querySelector(".input").value;

    timeleft = 3;



    if (word.toLowerCase() >= 'a' && word.toLowerCase() <= 'z') {





        if (word.toLowerCase() === y && count > 0) {

            restart();

            document.querySelector(".contents").innerHTML = "Hurry!!<br>That's right You Guessed"

            document.querySelector(".contents").style.color = "#1155ff";



        } else {

            count--;

            if (count > 0) {

                if (word.toLowerCase() < y.toLowerCase()) {

                    document.querySelector(".words").innerHTML = "Guessing letter is bigger than " + word.toUpperCase();

                } else {

                    document.querySelector(".words").innerHTML = "Guessing letter is smaller than " + word.toUpperCase();

                }

                wrongUpdate();

                counter();

                gucessUpdate();

            } else {



                document.querySelector(".contents").innerHTML = "OOPS!!! <br> OUT of Guess The Letter is " + y.toUpperCase();

                document.querySelector(".contents").style.color = "#831111";



                restart();

            }

        }

    } else {

        document.querySelector(".input").value = "";

        document.querySelector(".validate").style.display = "block"

        document.querySelector(".validate").innerHTML = "Enter a Valid Input"

        setTimeout(function () {

            document.querySelector(".validate").style.display = "none"

        }, 1000)

    }

}



function countCheck() {

    if (count < 1) {

        document.querySelector(".words ").style.display = "block";

        //document.querySelector(".").style.display = "block";

        //restart();



    } else {

        check();

    }

}