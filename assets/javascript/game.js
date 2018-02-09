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
var counter = 0
$(".gems").click(function() {
    var gemValue = ($(this).attr('data-gemValueArray'));
    gemValue = parseInt(gemValue, 10);
    counter += gemValue
    $("#currentScore").html(counter);
    // if (counter === ) {
        
    // } else {
        
    // }

});