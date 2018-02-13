// intro alert with instructions
$(document).ready(function() {

    // instructions alert
    alert("TIME TO DIVINE\n\nTry your hardest to tap into your inner mind and divine the golden number. Each gem is a random value between 1 and 12.\n\nSelect a gem and watch your number grow, but be wary! If you exceed the golden number you shall lose!\n\nARE YOU READY?");

    // function to create and append random number
    var randomNumber = 0;
    function randomNumGenerate(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        $("#targetNumber").html(randomNumber)
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
    var yourScore = 0;
    var winCount = 0;
    var lossCount = 0;

    $(".gems").click(function() {
        var gemValue = ($(this).attr('data-gemValueArray'));
        gemValue = parseInt(gemValue, 10);
        yourScore += gemValue
        $("#currentScore").html(yourScore);
        if (randomNumber === yourScore ){
            yourScore = 0;
            alert("YOU HAVE WON!!!\n\n you winner")
            $("#currentScore").empty();
            winCount += 1;
            $("#totalWins").html(winCount);
            randomNumGenerate(19,120);
            createGemValues();
        } else if (yourScore > randomNumber ) {
            yourScore = 0;
            alert("YOU LOSE\n\n you loser")
            $("#currentScore").empty();
            lossCount += 1;
            $("#totalLosses").html(lossCount);
            randomNumGenerate(19,120);
            createGemValues();
        }
    });




// closing of document.ready
});