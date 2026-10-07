const SECRET_CODE = "LESSGOO";


const enterButton =
    document.getElementById("enterBtn");

const nameInput =
    document.getElementById("name");

const secretInput =
    document.getElementById("secret");

const errorMessage =
    document.getElementById("errorMessage");


enterButton.addEventListener("click", function () {

    const name =
        nameInput.value.trim();

    const secret =
        secretInput.value.trim();


    if (name === "") {

        errorMessage.textContent =
            "Bro... you forgot your own name 😭";

        return;

    }


    if (secret === "") {

        errorMessage.textContent =
            "The secret code is waiting 👀";

        return;

    }


    if (secret !== SECRET_CODE) {

        errorMessage.textContent =
            "WRONG CODE 💀 Try again.";

        return;

    }


    localStorage.setItem(
        "playerName",
        name
    );


    localStorage.setItem(
        "gameStarted",
        "true"
    );


    window.location.href =
        "home.html";

});