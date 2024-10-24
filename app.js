// 1-misol
function createCar(make, model, year) {
    return {
      make: make,
      model: model,
      year: year,
      getCarInfo: function() {
        return `Car: ${this.make} ${this.model}, Year: ${this.year}`;
      }
    };
  }
  

  const myCar = createCar('Toyota', 'Corolla', 2022);
  console.log(myCar.getCarInfo()); 

//   2-misol
function processOrder(orderNumber, callback) {
  console.log(`Order ${orderNumber} is being processed...`);
  callback(orderNumber);
}

function logCallback(orderNumber) {
  console.log(`Order ${orderNumber} has been processed.`);
}

function emailCallback(orderNumber) {
  console.log(`Order ${orderNumber}: Confirmation email sent.`);
}

processOrder(12345, logCallback); 
processOrder(67890, emailCallback);

// 3-misol
(function logCurrentDateTime() {
    const currentDateTime = new Date();
    console.log(`Current Date and Time: ${currentDateTime}`);
  })();

//   4-misol
function filterItems(arr, predicate) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  

  const isEven = (num) => num % 2 === 0;
  
  const evenNumbers = filterItems(numbers, isEven);
  console.log(evenNumbers);

// 5-misol
const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log(person.getFullName());

// 6-misol
const company = {
    name: 'TechCorp',
    location: 'San Francisco',
  };
  
  console.log(company.ceo?.name); 
  
  