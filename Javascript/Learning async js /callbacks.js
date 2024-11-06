// Callback is a functon which is passed as an argument in another function 
function solve(callback, a, b) {
    callback(a, b);
}

function sum(a, b) {
    console.log(a + b);
}
solve(sum, 3, 5); // 8

// Callbacks are most often used to handle asynchronous functions
// setTimeout: performs function after some delay
console.log("start");
const myTimeout = setTimeout(sum, 1000)
function sum(){
    console.log("mid");
}
console.log("end");

// setInterval : performs a function repeatedly after some interval
console.log("start");
setInterval(sum, 1000)
function sum(){
    console.log("mid");
}
console.log("end");

// Handling async funcs become much complex when working with callback so we use promises 
// Callback hell when using nested callbacks 
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched.");
      callback(null, "Raw data");
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      console.log("Data processed:", data);
      callback(null, "Processed data");
    }, 1000);
  }
  
  function saveData(data, callback) {
    setTimeout(() => {
      console.log("Data saved:", data);
      callback(null, "Save complete");
    }, 1000);
  }
  
  // Using callbacks inside callbacks to achieve synchronous order of execution
  fetchData((err, rawData) => {
    if (err) {
      console.error("Error fetching data:", err);
      return;
    }
  
    processData(rawData, (err, processedData) => {
      if (err) {
        console.error("Error processing data:", err);
        return;
      }
  
      saveData(processedData, (err, result) => {
        if (err) {
          console.error("Error saving data:", err);
          return;
        }
  
        console.log(result); // "Save complete"
      });
    });
  });
  


