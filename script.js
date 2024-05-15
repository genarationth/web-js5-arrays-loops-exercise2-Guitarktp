// Part 1
let queue = ['Sofia', 'David', 'Juan'];
console.log(queue); // Output: ['Sofia', 'David', 'Juan']

// Part 2
queue.push('Sara', 'Augustin');
queue.shift();
console.log(queue); // Output: ['David', 'Juan', 'Sara', 'Augustin']

// Part 3
let indexOfDavid = queue.indexOf('David');
queue.splice(indexOfDavid + 1, 0, 'Renata');
queue.push('Elena');
console.log(queue); // Output: ['David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena']