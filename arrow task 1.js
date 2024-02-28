function func() {
    let innerFunction = () => {
      console.log(`THIS IS ${this.name}`);
    }
    innerFunction();
  }
  let san = {
    name: 'SANTHOSH'
  }
  
  func.call(san);