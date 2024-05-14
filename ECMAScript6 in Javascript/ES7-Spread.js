const oldLanguages = ["C++", "Python", "Java"];
const newLanguages = [...oldLanguages];
console.log(oldLanguages);
console.log(newLanguages);

// Example using spread
const deepArray = [1, 2, [3, 4, [5, 6]]];

const flattenedArray = [...deepArray.flat(Infinity)];
console.log("Flattened Array:", flattenedArray);

// let's convert the 2D array into 1D array using pure Javacript code
const grid = [1, 2, 3, 4, 5, 5, [18181, 10101, 11, 180]];

let newFlatArray = [];
for (let index = 0; index < grid.length; index++) {
  if (typeof grid[index] != "object") {
    newFlatArray.push(grid[index]);
  } else {
    let subarray = grid[index];
    console.log(typeof subarray);
    console.log(subarray);
    console.log(subarray.length);
    subarray.forEach((currentElement) => {
      newFlatArray.push(currentElement);
    });
  }
}

// output -> [1, 2, 3, 4, 5, 5, 18181, 10101, 11, 180]
console.log(newFlatArray);
