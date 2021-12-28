//variables
var id = "19-39831-1";
var name = "Alimul Mahfuz Tushar";
var age = 23;
console.log("Age is: "+id);
console.log("Name is : "+name);
console.log("Age is :"+age);

//anonymus function demo

var area = function(x,y){
    return x*y;
}

console.log(area(3,4));

//IFFE function Demo

var TriArea = (function(base,height){
    return 0.5*base*height;
});

console.log(TriArea(5,3));

//Objects
var car = {
    //Properties which are in key value pairs
    name : 'Volkwagon',
    NumberofSeats:4,
    plateNo:'DHA-KA-23533',
    color :'Black'
};
//Accessing Properties
console.log(car.name);
//Changing the value
car.name = 'Noah';
console.log(car.name);

//Object with Method
var Triangle = {
    base : 5,
    height: 6,
    Area:function(){
        return 0.5*this.base*this.height;
    }
};

console.log(Triangle.base);
//Another way of accessing (properties only)
console.log(Triangle['base']);
//Accesing Method
console.log(Triangle.Area());

//Object In Action
var matrix = {
    name:'Matrix: Revolution',
    genra:'Sci-fi',
    leadCharecter: 'Keanu Raveas',
    releaseDate: '2003'
};
var movieName = document.getElementById('movie');
movieName.textContent = matrix.name;
console.log(movieName);

//Template Constructor Function (Also called Constructor Syntax)
function Hotel(name,availableSeats,book){
    this.name=name;
    this.availableSeats = availableSeats;
    this.book = book;
    this.Print = function(){
        document.write(this.name);
        document.write('<br>');
    }
}
var SkyHotel = new Hotel("SkyHotel",44,33);
SkyHotel.Print();
SkyHotel.name = 'SkyHotel Branch 2';
SkyHotel.Print();
//Adding new property
SkyHotel.branch = "We have branch";
document.write(SkyHotel.branch+"<br>");
//Deleteing property
delete SkyHotel.name;
SkyHotel.Print();

//Object Constructior Notation
var hotel = new Object();
hotel.name = "Paradise Hotel";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
return this.rooms - this.booked;
};

var test = function windowSize() {
    var width = this.innerWidth;
    var height = this.innerHeight;
    return [height, width];
}

