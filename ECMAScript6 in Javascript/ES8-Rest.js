
// Using rest operator to create a deep array
function createDeepArray(...args) {
    return args;
  }
  
const createdDeepArray = createDeepArray(1, 2, 3, 4, 5, 6);
console.log("Created Deep Array:", createdDeepArray);