function makeCar(manufact, model, ...arbitNum) {
    let car = { manufact, model, ...Object.fromEntries(arbitNum) };//here I have used Objec.fromEntries() method that will take keys and values from given array
    return car;
  };
  
  let myCar = makeCar('Suzuki', 'Swift', ['color', 'white'], ['year', 2024]);
  console.log(myCar);
  