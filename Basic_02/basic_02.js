//Creating an Array

var myArray = [
    'Tushar', 'nafisa','hossain','shobuz'
]
console.log(myArray[1]);

//Objects in an array
var objArray = {
    'name': ['tushar','nafisa'],
    'age' : [33,34],
    'text': 'Integer'
};

console.log(objArray['age'][1]);

var objArrayTwo =[
    {
        'name':"QuancyViolet",
        'room':34,
        'location':'Dhaka',
        'booked':28
    },
    {
        'name':'Volkwagon',
        'seats':4,
        'color':'black',
        'engine': '1200HP',
        'wheels':4,
    },
    
];
//In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.
console.log(typeof(objArrayTwo[0].name));

var resulation = window.screen.width;
console.log(resulation);
alert(document.lastModified);

//array object revisitied
const arr = [1,3,5,4];
function printArrya(){
    for(var i=0;i<arr.length;i++){

        console.log(arr[i]);
    }
}
printArrya();
arr.push(8);
console.log(arr[4]);
console.log(arr[arr.length-1]);
printArrya(); 3



