const activityEl = document.getElementById('activity-p')
const priceEl = document.getElementById('price-p')
const participantsEl = document.getElementById('participants-p')
var submitBtn = document.querySelector('.btn')
console.log(activityEl)

var moneyOne = document.getElementById('moneyOne')
var moneyTwo = document.getElementById('moneyTwo')
var moneyThree = document.getElementById('moneyThree')
var personTwo = document.getElementById("personTwo")
var personThree = document.getElementById('personThree')

console.log("LLLLLLLL")
console.log(personTwo)
console.log(personThree)
console.log("LLLLLLLL")






document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    //JS sheet begins here
    //ADD APIs HERE
    var requestUrl = "http://www.boredapi.com/api/activity/"

    var activityEl = document.getElementById('activity')

    var selectedActivity;

    function getActivityCategory() {
        selectedActivity = document.getElementById('searchBar').value;
        console.log(selectedActivity);
    };
    

    

    var apiQuery = "http://www.boredapi.com/api/activity?type=" + selectedActivity

    console.log(apiQuery)

    function getApi() {
        fetch(apiQuery)
            .then(function (response) {
                return response.json();
            })
            .then(function (data1) {
                return getActivity(data1)
                
            })
    }


    //
    
    function getActivity(data1) {

        //Getting Values back out of Object from the Bored API
        console.log(data1)
        var getActivity = data1.activity
        var getParticipants = data1.participants
        var getType = data1.type
        var getPrice = data1.price
        activityEl.innerHTML = getActivity
        console.log(data1.price)
        console.log(data1.activity)

        function checkPrice(){
        //Checking Price Variable and assigning $$ Signs
        if (data1.price == 0){
        console.log("Free")
        priceEl.innerHTML = "Free";
        }
        else if (data1.price > 0 && data1.price <= .2){
            console.log("Cheap");
            moneyTwo.classList.add('hide');
            moneyThree.classList.add('hide')
        }
        else if (data1.price >.2 && data1.price <= .5){
            console.log("Moderate")
            moneyThree.classList.add('hide')
        }
            else  
            console.log("Expensive")
    }
    checkPrice();

    function checkParticipants(){
        //Checking Participants and assingning people icons
        if (data1.participants == 1){
            console.log("one person")
            personTwo.classList.add('hide');
            personThree.classList.add('hide')
            }
            else if (data1.participants == 2){
                console.log("Two People");
                personThree.classList.add('hide')
            }
        }
    checkParticipants();
    }

    
    getApi();



    //SECOND API - pull info from general query
    //SECOND API - insert image that ties to the activity (Unsplash?)


    //9 different categories, arrange in an array, w/ up to 10 activities being listed
    //insert image that ties to the activity (Unsplash?)
    //Give brief on the activity
    //Data key can give visual representation (icon)


    //LAYOUT: list, "click here for more information" - give items above
    // - ALSO - possible tie in for musical selection

    //Using modals are "like" popups, but not as restrictive

    //Melina's notes for branch testing



})




























































































var category = 'educational';
if (category === 'Busywork') {
    category = 'chores'
};
var key = '&client_id=n2fGqHKjWmuL15Ufx1eLf0EYsFiL2psgSMrAcGiciX4'
function getUnsplashApi(category) {
    var requestUrl = 'https://api.unsplash.com/search/photos?page=1&query=' + category + key
    console.log(requestUrl);
    fetch(requestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayPhoto(data, category);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error) {
            alert('unable to connect to Unsplash');
        });
};
var displayPhoto = function (photoList, category) {
    console.log(photoList);
    var currentPhotoNum = (Math.floor(Math.random()*11));
    console.log(photoList.results[currentPhotoNum].urls.small);
    console.log(photoList.results[currentPhotoNum].alt_description);
}


getUnsplashApi('Educational');

submitBtn.addEventListener('click', getActivityCategory);

});

var imageContainer = document.getElementById('#image-container')
var image = document.createElement('img');
getUnsplashApi(category);

