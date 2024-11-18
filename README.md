# Data Processing and Deduplication Project

This project processes and deduplicates data from multiple JSON files using specified criteria. It includes functionality for reading data, deduplicating based on user-defined keys, and sorting the processed data alphabetically by name.

## Features

- **Fetch Data**: Read data from JSON files.
- **Deduplication**: Remove duplicate entries based on one or more keys.
- **Sorting**: Sort the deduplicated data alphabetically by a specific field.
- **Unit Tests**: Comprehensive test coverage for utility functions using Jest.



## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/roibuzaglo202/data-task.git
   cd data-task

2. Install dependencies:
   ```bash
   npm install


### Running Tests
To run unit tests:
   ``` bash
   npm test
```

### Assignment: Data Processing and Deduplication
Writing utility functions in utils.js.
Implementing the main script in index.js.
Writing tests in utils.test.js to ensure the correctness of your utility functions.

#### Details of the Task
1. Files Provided

   You are provided with the following folder structure:
   ```graphql
   data-task/
   ├── data/
   │   ├── source1.json      # First JSON data source (~10 items, with duplicates)
   │   ├── source2.json      # Second JSON data source (~10 items, with duplicates)
   ├── src/
   │   ├── index.js          # Main script (to be implemented)
   │   ├── utils.js          # Utility functions (to be implemented)
   ├── tests/
   │   ├── utils.test.js     # Unit tests (to be implemented)
   ├── package.json          # Already configured
   ├── .babelrc             # Already configured
   └── README.md            # Already provided
   ```
   
2. Requirements
   - utils.js:
     - Implement the following functions:
       - fetchData(filePath): Reads and parses data from a JSON file.
       - deduplicateByKeys(data, keys): Deduplicates an array of objects based on specified keys.
          - Example: Given keys = ['name', 'age'], two objects with the same name and age should be treated as duplicates.
   - index.js:
     - Read data from the source1.json and source2.json files in the data/ folder.
     - Combine the data from both files into one array.
     - Deduplicate the combined data using deduplicateByKeys.
     - Sort the deduplicated data alphabetically by the name field.
     - Print the final result to the console.
   - utils.test.js:
     - Write unit tests to ensure the correctness of the utility functions.
       
#### Deliverables
1. src/utils.js: Implementation of fetchData and deduplicateByKeys.
2. src/index.js: The main script to process and deduplicate data.
3. tests/utils.test.js: Unit tests for the functions in utils.js.

#### Expected Output
After running index.js, the console should display:
```javascript
[
   { id: 1, name: 'Alice', age: 25, city: 'New York' },
   { id: 2, name: 'Bob', age: 30, city: 'San Francisco' },
   { id: 3, name: 'Charlie', age: 35, city: 'Los Angeles' },
   { id: 4, name: 'David', age: 40, city: 'Seattle' },
   { id: 5, name: 'Eve', age: 28, city: 'New York' },
   { id: 6, name: 'Frank', age: 33, city: 'Austin' },
   { id: 7, name: 'Grace', age: 29, city: 'Boston' },
   { id: 8, name: 'Hank', age: 38, city: 'Chicago' },
   { id: 9, name: 'Ivy', age: 27, city: 'New York' },
   { id: 10, name: 'John', age: 45, city: 'San Francisco' },
   { id: 20, name: 'Zara', age: 32, city: 'Miami' }
]
```
#### Notes
- Use modern ES syntax (e.g., import/export).
- Follow best practices for clean and maintainable code.
- Include meaningful test cases for different scenarios in utils.test.js.
