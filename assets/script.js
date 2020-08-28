var date
var doneButton = $(".doneButton")
var event = $(".event")
var timeBlock = $(".timeBlock")

var time = 0;



//Display Moment (Current day & time) in Jumbotron
var moment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(moment);
$("#displayMoment").text(moment);

//save input value on click on done button and save to local storage (event listener)
function setPlanner () {
    
    var inputData = $(".inputData");

    inputData.text = storedInput;

    var storedInput = JSON.parse(localStorage.getItem("storedInput"));


  
    

    setPlanner ();
};

function storeInputs () {
    localStorage.setItem("input", JSON.stringify(StoredInput));

      //I'm getting object, object ???
    $(".doneButton").on("click", function(){
        event.preventDefault ();
    // alert("I've been clicked!");

    var eventText = storedInput.value
})
};
