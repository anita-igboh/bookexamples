// var hotel = new Object();
// hotel.name= 'Park';
// hotel.rooms = 120;
// hotel .booked = 77;
// hotel .checkAvailability = function() {
// return this.rooms - this.booked;
// };

// var elName = document.getElementById('hotelName');
// elName.textContent = hotel.name;

// var elRooms = document .getElementById('rooms');
// elRooms.textContent = hotel.checkAvailability(); 


// literal (adding and removing props)
// var school = {
//     name:"MIS",
//     classes:6,
//     labs:3,
// };

// school.pupils = 100;
// school.feild = true;
// delete school.labs;
// console.log(school);

// creating object and then adding properties(literal)
var hotel = {}
hotel .name= 'Quay';
hotel .rooms = 40;
hotel.booked = 25;
hotel.checkAvailability =function() {
return this.rooms - this .booked;
}; 

// creating object with properties and method(literal)

var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
    return this.rooms - this.booked;
    }
    };

    // object constructor
 var hotel = new Object();
    hotel.name = 'Quay';
    hotel .rooms = 40;
    hotel . booked= 25;
    hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

// object constructor
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
    return this.rooms - this.booked;
    };
}
    var quayHotel =new Hotel('Quay', 40 , 25);
    var parkHotel =new Hotel('Park', 120, 77); 


    // when a function is inside an object it becomes a method
    var shape = {
        width:300,
        height:200,
        getArea:function(){
            return this.width * this.height;
        }
    };


    // variable
    var school = "MIS";

    // array
    var hotels = [
        ' Quay ',
        ' Park',
        ' Beach',
        'Bloomsbury'
    ]
    hotels[2];

    