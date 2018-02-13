// intro alert with instructions
$(document).ready(function() {

    // instructions alert
    alert("TIME TO DIVINE\n\nTry your hardest to tap into your inner mind and divine the golden number. Each gem is a random value between 1 and 12.\n\nSelect a gem and watch your number grow, but be wary! If you exceed the golden number you shall lose!\n\nARE YOU READY?");

    // function to create and append random number
    function randomNumGenerate(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        $("#targetNumber").append(randomNumber)
    };

    randomNumGenerate(19,120);


    // function to create gem values
    function gemValueArray(length, max) {
        return Array.apply(null, Array(length)).map(function() {
            return Math.round(Math.random() * max);
        });
    }

    var gemValueArray = gemValueArray(4,12);

    // function to apply gem values as data attributes
    function createGemValues() {
        $("#blueGem").attr('data-gemValueArray', gemValueArray[0]);
        $("#greenGem").attr('data-gemValueArray', gemValueArray[1]);
        $("#pinkGem").attr('data-gemValueArray', gemValueArray[2]);
        $("#redGem").attr('data-gemValueArray', gemValueArray[3]);
    }

    createGemValues();

    // retrieve and add gem values to 'your score' area
    var yourScore = 0
    $(".gems").click(function() {
        var gemValue = ($(this).attr('data-gemValueArray'));
        gemValue = parseInt(gemValue, 10);
        yourScore += gemValue
        $("#currentScore").html(yourScore);
    });


    if ($("#currentScore") === $("#targetNumber")) {
        alert("you have won")
    } else if ($("#currentScore") > $("#targetNumber")) {
        alert("you lose you loser")
    }

// closing of document.ready
});