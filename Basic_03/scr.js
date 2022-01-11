const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person);
  console.log(myString);

  //Setter getter
  const address = {
    house:'Nabinbag',
    road:'3c, 247 Est-Meradia',
    phone: '01316400626',
    get phoneNumber(){
        return parseInt(this.phone);
    }
  };

  console.log(address.phoneNumber);

  date = new Date();
  console.log("Today date is :"+date);