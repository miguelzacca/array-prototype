# Array Prototype

**Array Prototype** is a lightweight TypeScript library that extends the native JavaScript Array prototype with additional utility methods. These methods provide functionalities like getting a random element, shuffling the array, finding unique elements, and more.

## Installation

You can install the library using npm:

```bash
npm install array-prototype
```

## Usage

Once installed, you can import and start using the extended array methods in your project:

```typescript
import 'array-prototype'

const arr = [1, 2, 3, 3, 4, 5, 5]

// Get a random element
const randomElement = arr.random()
console.log(randomElement) // 3

// Shuffle the array
const shuffledArray = arr.shuffle()
console.log(shuffledArray) // [5, 1, 3, 4, 2, 5, 3]

// Get unique elements
const uniqueArray = arr.unique()
console.log(uniqueArray) // [1, 2, 3, 4, 5]

// Get the last element
const lastElement = arr.last()
console.log(lastElement) // 5

// Calculate the average
const average = arr.average(2)
console.log(average) // 3.29

// Remove a specific element
const newArray = arr.remove(3)
console.log(newArray) // [1, 2, 4, 5, 5]

// Get the minimum and maximum values
const min = arr.min()
const max = arr.max()
console.log(min, max) // 1, 5

// Group elements by a key
const objectsArray = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' },
]
const groupedByCategory = objectsArray.groupBy('category')
console.log(groupedByCategory)
// {
//   fruit: [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' }
//   ],
//   vegetable: [
//     { category: 'vegetable', name: 'carrot' }
//   ]
// }
```

## API

### `random()`

Returns a random element from the array.

### `shuffle()`

Shuffles the elements of the array in place and returns the array.

### `unique()`

Returns a new array with only the unique elements.

### `last()`

Returns the last element of the array.

### `average(precision?: number)`

Calculates the average of the numeric elements in the array. The optional `precision` parameter allows you to specify the number of decimal places.

### `remove(value: T)`

Removes all instances of the specified value from the array and returns a new array.

### `min()`

Returns the smallest number in the array.

### `max()`

Returns the largest number in the array.

### `groupBy(key: string)`

Groups the array elements by the specified key and returns an object with the key as the property and an array of corresponding elements as the value.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

## Acknowledgements

This library is inspired by the need for more advanced array manipulations in JavaScript and TypeScript projects. We hope it helps you streamline your development process!
