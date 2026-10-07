/* =====================================================
   PLAYER
===================================================== */


const playerName =
    localStorage.getItem("playerName");


/* =====================================================
   HOME PAGE NAME
===================================================== */


const playerNameElement =
    document.getElementById("playerName");


if (playerNameElement) {

    playerNameElement.textContent =
        playerName || "Friend";

}


/* =====================================================
   RETURN HOME
===================================================== */


function goHome() {

    window.location.href =
        "home.html";

}


/* =====================================================
   FOOD DEPARTMENT
===================================================== */


let foodPoints = 0;

let waterPoints = 0;

let sleepPoints = 0;

let outsidePoints = 0;


const foodChoices =
    document.querySelectorAll(".food-choice");


foodChoices.forEach(function(button) {

    button.addEventListener("click", function() {

        foodChoices.forEach(function(item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");


        foodPoints =
            Number(button.dataset.points);


        localStorage.setItem(
            "foodPoints",
            foodPoints
        );


        localStorage.setItem(
            "foodStatus",
            button.dataset.status
        );

    });

});


const waterChoices =
    document.querySelectorAll(".water-choice");


waterChoices.forEach(function(button) {

    button.addEventListener("click", function() {

        waterChoices.forEach(function(item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");


        waterPoints =
            Number(button.dataset.points);


        localStorage.setItem(
            "waterPoints",
            waterPoints
        );

    });

});


const sleepChoices =
    document.querySelectorAll(".sleep-choice");


sleepChoices.forEach(function(button) {

    button.addEventListener("click", function() {

        sleepChoices.forEach(function(item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");


        sleepPoints =
            Number(button.dataset.points);


        localStorage.setItem(
            "sleepPoints",
            sleepPoints
        );

    });

});


const outsideChoices =
    document.querySelectorAll(".outside-choice");


outsideChoices.forEach(function(button) {

    button.addEventListener("click", function() {

        outsideChoices.forEach(function(item) {

            item.classList.remove("selected");

        });


        button.classList.add("selected");


        outsidePoints =
            Number(button.dataset.points);


        localStorage.setItem(
            "outsidePoints",
            outsidePoints
        );

    });

});


/* SAVE FOOD REPORT */


const saveFoodReport =
    document.getElementById("saveFoodReport");


if (saveFoodReport) {

    saveFoodReport.addEventListener(
        "click",
        function() {


            const total =

                Number(
                    localStorage.getItem(
                        "foodPoints"
                    ) || 0
                )

                +

                Number(
                    localStorage.getItem(
                        "waterPoints"
                    ) || 0
                )

                +

                Number(
                    localStorage.getItem(
                        "sleepPoints"
                    ) || 0
                )

                +

                Number(
                    localStorage.getItem(
                        "outsidePoints"
                    ) || 0
                );


            localStorage.setItem(
                "dailyFoodReport",
                total
            );


            const result =
                document.getElementById(
                    "foodResult"
                );


            result.textContent =
                "Report saved. Small win detected. +"
                + total
                + " points.";


            setTimeout(function() {

                window.location.href =
                    "home.html";

            }, 900);

        }
    );

}


/* =====================================================
   BRAIN.EXE
===================================================== */


function brainChoice(choice) {

    const result =
        document.getElementById(
            "brainResult1"
        );


    if (choice === "profile") {

        result.innerHTML =
            "🚨 TERRIBLE IDEA DETECTED. " +
            "Your thumb has betrayed you. Close the profile.";

    }


    if (choice === "ceiling") {

        result.innerHTML =
            "🫠 Dramatic? Yes. " +
            "Dangerous? No. " +
            "Your ceiling has now heard everything.";

    }


    if (choice === "water") {

        result.innerHTML =
            "💧 GOOD DECISION. " +
            "Your brain has been denied the 2 AM nonsense.";

    }


    if (choice === "text") {

        result.innerHTML =
            "🚨 MISSION ABORTED. " +
            "Put the phone down before tomorrow-you hates tonight-you.";

    }

}


function brainChoice2(choice) {

    const result =
        document.getElementById(
            "brainResult2"
        );


    if (choice === "investigate") {

        result.innerHTML =
            "🔎 You are not Sherlock Holmes. " +
            "There is no secret clue hidden in that photo.";

    }


    if (choice === "cry") {

        result.innerHTML =
            "🎬 Cinematic. Allowed. " +
            "Just don't turn one emotional moment into a three-hour season finale.";

    }


    if (choice === "close") {

        result.innerHTML =
            "🚪 THAT is called progress. " +
            "Small decision. Big respect.";

    }


    if (choice === "friend") {

        result.innerHTML =
            "📱 Congratulations. " +
            "Your friend has now received the 3 AM emotional damage package.";

    }

}


/* =====================================================
   ARCADE
===================================================== */


function chaiChoice(choice) {

    const result =
        document.getElementById(
            "chaiResult"
        );


    const homeButton =
        document.getElementById(
            "arcadeHome"
        );


    if (choice === "me") {

        result.innerHTML =
            "☕ CORRECT. " +
            "Obviously you deserve the chai. " +
            "You survived being emotionally inconvenienced.";


    }


    if (choice === "friend") {

        result.innerHTML =
            "😂 Generous. " +
            "Your friend has officially been promoted to chai manager.";


    }


    if (choice === "cat") {

        result.innerHTML =
            "🐈 The cat already owns the house. " +
            "Nice try.";


    }


    homeButton.style.display =
        "block";

}


/* =====================================================
   COMEBACK ROOM
===================================================== */


let comebackTotal =
    Number(
        localStorage.getItem(
            "comebackTotal"
        ) || 0
    );


const totalElement =
    document.getElementById(
        "comebackTotal"
    );


if (totalElement) {

    totalElement.textContent =
        comebackTotal;

}


/* FOOD SUMMARY */


const foodSummary =
    document.getElementById(
        "foodSummary"
    );


if (foodSummary) {

    const status =
        localStorage.getItem(
            "foodStatus"
        );


    const points =
        localStorage.getItem(
            "dailyFoodReport"
        ) || 0;


    if (status === "full") {

        foodSummary.textContent =
            "🍽️ Proper meal. Excellent. " +
            "Today's food report gave you " +
            points +
            " points.";

    }

    else if (status === "some") {

        foodSummary.textContent =
            "🙂 You ate something. " +
            "Not perfect, but we're counting it. " +
            points +
            " points recorded.";

    }

    else if (status === "barely") {

        foodSummary.textContent =
            "🫠 Barely ate. " +
            "Your stomach would like to schedule a meeting.";

    }

    else if (status === "nothing") {

        foodSummary.textContent =
            "🚨 Basically nothing. " +
            "Please eat something. Your comeback needs fuel.";

    }

    else {

        foodSummary.textContent =
            "No food report yet. " +
            "Today still has time.";

    }

}


/* CLAIM WIN BUTTONS */


const comebackButtons =
    document.querySelectorAll(
        ".comeback-button"
    );


comebackButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {


            const points =
                Number(
                    button.dataset.points
                );


            const name =
                button.dataset.name;


            comebackTotal += points;


            localStorage.setItem(
                "comebackTotal",
                comebackTotal
            );


            if (totalElement) {

                totalElement.textContent =
                    comebackTotal;

            }


            button.disabled = true;

            button.style.opacity =
                "0.5";


            const message =
                document.getElementById(
                    "winMessage"
                );


            if (message) {

                message.textContent =
                    "✨ +"
                    + points
                    + " points — "
                    + name
                    + ". Tiny win collected.";

            }

        }
    );

});