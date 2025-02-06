
   let questions = [
    {
        "category": "React",
        "question": "What is React?",
        "options": [
            "A CSS framework",
            "A database",
            "A JavaScript library for building user interfaces",
            "An operating system"
        ],
        "correctAnswer": "A JavaScript library for building user interfaces"
    },
    {
        "category": "React",
        "question": "Which method is used to render React elements into the DOM?",
        "options": [
            "React.create()",
            "ReactDOM.create()",
            "ReactDOM.render()",
            "React.render()"
        ],
        "correctAnswer": "ReactDOM.render()"
    },
    {
        "category": "React",
        "question": "Which hook is used to manage state in functional components?",
        "options": [
            "useReducer",
            "useContext",
            "useState",
            "useEffect"
        ],
        "correctAnswer": "useState"
    },
    {
        "category": "React",
        "question": "What is JSX?",
        "options": [
            "A new programming language",
            "A database query language",
            "A syntax extension for JavaScript",
            "A type of CSS"
        ],
        "correctAnswer": "A syntax extension for JavaScript"
    },
    {
        "category": "React",
        "question": "What is the purpose of the `useEffect` hook in React?",
        "options": [
            "To manage state",
            "To handle side effects",
            "To render components",
            "To create context"
        ],
        "correctAnswer": "To handle side effects"
    },
    {
        "category": "React",
        "question": "Which lifecycle method is invoked immediately after a component is mounted?",
        "options": [
            "componentWillMount",
            "componentDidUpdate",
            "componentDidMount",
            "componentWillUpdate"
        ],
        "correctAnswer": "componentDidMount"
    },
    {
        "category": "React",
        "question": "What is a key in React and why is it important?",
        "options": [
            "A CSS property",
            "A type of hook",
            "A unique identifier for elements in a list",
            "A database key"
        ],
        "correctAnswer": "A unique identifier for elements in a list"
    },
    {
        "category": "React",
        "question": "What is the virtual DOM?",
        "options": [
            "A new database structure",
            "A programming concept that enhances real DOM",
            "A virtual representation of the real DOM",
            "A type of React hook"
        ],
        "correctAnswer": "A virtual representation of the real DOM"
    },
    {
        "category": "React",
        "question": "What does the `setState` function do in React?",
        "options": [
            "Renders the component",
            "Updates the component's state",
            "Creates a new component",
            "Fetches data"
        ],
        "correctAnswer": "Updates the component's state"
    },
    {
        "category": "React",
        "question": "What is the purpose of React fragments?",
        "options": [
            "To fetch data from APIs",
            "To group multiple elements without adding extra nodes to the DOM",
            "To manage component state",
            "To handle side effects"
        ],
        "correctAnswer": "To group multiple elements without adding extra nodes to the DOM"
    },
    {
        "category": "React",
        "question": "What is the difference between controlled and uncontrolled components?",
        "options": [
            "Controlled components are faster",
            "Uncontrolled components are deprecated",
            "Controlled components have their state controlled by React, while uncontrolled components manage their own state",
            "Controlled components are stateless"
        ],
        "correctAnswer": "Controlled components have their state controlled by React, while uncontrolled components manage their own state"
    },
    {
        "category": "React",
        "question": "How can you handle events in React?",
        "options": [
            "By using lowercase syntax and passing a string as an event handler",
            "By directly manipulating the DOM",
            "By using a special event handler function",
            "By using camelCase syntax and passing a function as an event handler"
        ],
        "correctAnswer": "By using camelCase syntax and passing a function as an event handler"
    },
    {
        "category": "React",
        "question": "What is the purpose of `prop-types` in React?",
        "options": [
            "To define the state of a component",
            "To render the component",
            "To validate the props passed to a component",
            "To handle side effects"
        ],
        "correctAnswer": "To validate the props passed to a component"
    },
    {
        "category": "React",
        "question": "What is React context used for?",
        "options": [
            "To handle side effects",
            "To create new components",
            "To manage global state in an application",
            "To fetch data from APIs"
        ],
        "correctAnswer": "To manage global state in an application"
    },
    {
        "category": "React",
        "question": "Which method is used to create a new React component?",
        "options": [
            "React.component()",
            "React.newComponent()",
            "React.createClass()",
            "React.createComponent()"
        ],
        "correctAnswer": "React.createClass()"
    },
    {
        "category": "React",
        "question": "What is the purpose of React refs?",
        "options": [
            "To manage component state",
            "To handle side effects",
            "To render components",
            "To directly access and manipulate DOM elements"
        ],
        "correctAnswer": "To directly access and manipulate DOM elements"
    },
    {
        "category": "React",
        "question": "What is a higher-order component (HOC) in React?",
        "options": [
            "A hook that handles side effects",
            "A class that extends another class",
            "A component that manages state",
            "A function that takes a component and returns a new component"
        ],
        "correctAnswer": "A function that takes a component and returns a new component"
    },
    {
        "category": "React",
        "question": "What does the term 'lifting state up' mean in React?",
        "options": [
            "Deleting the state",
            "Moving the state to a common ancestor component",
            "Rendering the component",
            "Creating a new state"
        ],
        "correctAnswer": "Moving the state to a common ancestor component"
    },
    {
        "category": "React",
        "question": "How can you optimize the performance of a React application?",
        "options": [
            "By avoiding components",
            "By storing state in local storage",
            "By using only class components",
            "By using React.memo, useMemo, and useCallback hooks"
        ],
        "correctAnswer": "By using React.memo, useMemo, and useCallback hooks"
    },
    {
        "category": "React",
        "question": "What is the purpose of the `useContext` hook in React?",
        "options": [
            "To handle side effects",
            "To render components",
            "To access the context value",
            "To manage state"
        ],
        "correctAnswer": "To access the context value"
    },
       
    {
        "category": "SQL",
        "question": "What does SQL stand for?",
        "options": [
            "Simple Query Language",
            "System Query Language",
            "Structured Query Language",
            "Sequential Query Language"
        ],
        "correctAnswer": "Structured Query Language"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to retrieve data from a database?",
        "options": [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        "correctAnswer": "SELECT"
    },
    {
        "category": "SQL",
        "question": "What is a primary key in SQL?",
        "options": [
            "A key used to sort data",
            "A unique identifier for each record in a table",
            "A key that references another table",
            "A key used to join tables"
        ],
        "correctAnswer": "A unique identifier for each record in a table"
    },
    {
        "category": "SQL",
        "question": "Which SQL clause is used to filter records?",
        "options": [
            "SELECT",
            "FROM",
            "WHERE",
            "ORDER BY"
        ],
        "correctAnswer": "WHERE"
    },
    {
        "category": "SQL",
        "question": "Which SQL function is used to count the number of rows in a table?",
        "options": [
            "SUM()",
            "COUNT()",
            "MAX()",
            "AVG()"
        ],
        "correctAnswer": "COUNT()"
    },
    {
        "category": "SQL",
        "question": "Which SQL keyword is used to sort the result-set?",
        "options": [
            "GROUP BY",
            "ARRANGE BY",
            "ORDER BY",
            "SORT BY"
        ],
        "correctAnswer": "ORDER BY"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to update data in a database?",
        "options": [
            "INSERT",
            "DELETE",
            "UPDATE",
            "SELECT"
        ],
        "correctAnswer": "UPDATE"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to delete data from a database?",
        "options": [
            "DROP",
            "REMOVE",
            "DELETE",
            "ERASE"
        ],
        "correctAnswer": "DELETE"
    },
    {
        "category": "SQL",
        "question": "Which SQL clause is used to group rows that have the same values?",
        "options": [
            "WHERE",
            "ORDER BY",
            "GROUP BY",
            "HAVING"
        ],
        "correctAnswer": "GROUP BY"
    },
    {
        "category": "SQL",
        "question": "Which SQL keyword is used to retrieve a maximum value?",
        "options": [
            "UPPER()",
            "MAX()",
            "HIGHEST()",
            "TOP()"
        ],
        "correctAnswer": "MAX()"
    },
    {
        "category": "SQL",
        "question": "Which SQL keyword is used to retrieve a minimum value?",
        "options": [
            "LEAST()",
            "BOTTOM()",
            "MIN()",
            "LOWEST()"
        ],
        "correctAnswer": "MIN()"
    },
    {
        "category": "SQL",
        "question": "Which SQL function is used to calculate the average value of a numeric column?",
        "options": [
            "MEDIAN()",
            "AVG()",
            "SUM()",
            "COUNT()"
        ],
        "correctAnswer": "AVG()"
    },
    {
        "category": "SQL",
        "question": "What is a foreign key in SQL?",
        "options": [
            "A key used to sort data",
            "A key used to group rows",
            "A key used to link two tables together",
            "A key that ensures each row has a unique value"
        ],
        "correctAnswer": "A key used to link two tables together"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to create a new table in a database?",
        "options": [
            "NEW TABLE",
            "MAKE TABLE",
            "CREATE TABLE",
            "ADD TABLE"
        ],
        "correctAnswer": "CREATE TABLE"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to create a new database?",
        "options": [
            "ADD DATABASE",
            "NEW DATABASE",
            "CREATE DATABASE",
            "MAKE DATABASE"
        ],
        "correctAnswer": "CREATE DATABASE"
    },
    {
        "category": "SQL",
        "question": "Which SQL clause is used to specify the conditions that must be met for the rows to be selected?",
        "options": [
            "FROM",
            "ORDER BY",
            "WHERE",
            "GROUP BY"
        ],
        "correctAnswer": "WHERE"
    },
    {
        "category": "SQL",
        "question": "Which SQL keyword is used to add a condition to a GROUP BY clause?",
        "options": [
            "ORDER BY",
            "WHERE",
            "HAVING",
            "GROUP BY"
        ],
        "correctAnswer": "HAVING"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to remove a table from a database?",
        "options": [
            "REMOVE TABLE",
            "DROP TABLE",
            "ERASE TABLE",
            "DELETE TABLE"
        ],
        "correctAnswer": "DROP TABLE"
    },
    {
        "category": "SQL",
        "question": "Which SQL function is used to sum the values of a numeric column?",
        "options": [
            "ADD()",
            "TOTAL()",
            "SUM()",
            "COUNT()"
        ],
        "correctAnswer": "SUM()"
    },
    {
        "category": "SQL",
        "question": "Which SQL keyword is used to join tables based on a related column?",
        "options": [
            "MERGE",
            "JOIN",
            "LINK",
            "CONNECT"
        ],
        "correctAnswer": "JOIN"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to add a column to an existing table?",
        "options": [
            "ADD COLUMN",
            "ALTER TABLE",
            "NEW COLUMN",
            "INSERT COLUMN"
        ],
        "correctAnswer": "ALTER TABLE"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to delete a column from an existing table?",
        "options": [
            "DROP COLUMN",
            "ALTER TABLE",
            "REMOVE COLUMN",
            "DELETE COLUMN"
        ],
        "correctAnswer": "ALTER TABLE"
    },
    {
        "category": "SQL",
        "question": "Which SQL statement is used to rename a table?",
        "options": [
            "ALTER TABLE",
            "MODIFY TABLE",
            "RENAME TABLE",
            "CHANGE TABLE"
        ],
        "correctAnswer": "RENAME TABLE"
    },
    {
        "category": "SQL",
        "question": "What is a composite key in SQL?",
        "options": [
            "A key that references another table",
            "A key used to group rows",
            "A key composed of two or more columns",
            "A key used to sort data"
        ],
        "correctAnswer": "A key composed of two or more columns"
    },
    {
        "category": "SQL",
        "question": "Which SQL function returns the current date and time?",
        "options": [
            "CURRENT_DATE()",
            "GETDATE()",
            "NOW()",
            "SYSDATE()"
        ],
        "correctAnswer": "NOW()"
    },
    {
        "category": "JavaScript",
        "question": "What is the use of the 'let' keyword in JavaScript?",
        "options": [
          "Declares a global variable",
          "Creates a constant",
          "Declares a block-scoped local variable",
          "Declares a variable without any scope"
        ],
        "correctAnswer": "Declares a block-scoped local variable"
      },
      {
        "category": "JavaScript",
        "question": "What is an Immediately Invoked Function Expression (IIFE)?",
        "options": [
          "A function that runs on page load",
          "A function that runs as soon as it is defined",
          "A function that runs when called",
          "A function that never runs"
        ],
        "correctAnswer": "A function that runs as soon as it is defined"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'this' keyword in JavaScript?",
        "options": [
          "Declares a new variable",
          "Creates a new object",
          "Refers to the current object",
          "Refers to the global scope"
        ],
        "correctAnswer": "Refers to the current object"
      },
      {
        "category": "JavaScript",
        "question": "What is an arrow function?",
        "options": [
          "A function that runs on page load",
          "A function that never runs",
          "A function that returns an array",
          "A shorthand way to write functions using the => syntax"
        ],
        "correctAnswer": "A shorthand way to write functions using the => syntax"
      },
      {
        "category": "JavaScript",
        "question": "What is the difference between '==' and '===' in JavaScript?",
        "options": [
          "'===' compares values only, while '==' compares both values and types",
          "'==' compares values only, while '===' compares both values and types",
          "They are both the same",
          "'==' is used for arrays and '===' is used for objects"
        ],
        "correctAnswer": "'==' compares values only, while '===' compares both values and types"
      },
      {
        "category": "JavaScript",
        "question": "What is the use of the 'const' keyword in JavaScript?",
        "options": [
          "Declares a global variable",
          "Declares a block-scoped constant",
          "Declares a function",
          "Declares a class"
        ],
        "correctAnswer": "Declares a block-scoped constant"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'map' method in JavaScript?",
        "options": [
          "Adds a new element to an array",
          "Removes an element from an array",
          "Sorts an array in ascending order",
          "Creates a new array populated with the results of calling a provided function on every element in the calling array"
        ],
        "correctAnswer": "Creates a new array populated with the results of calling a provided function on every element in the calling array"
      },
      {
        "category": "JavaScript",
        "question": "What is the difference between 'let' and 'var' in JavaScript?",
        "options": [
          "'var' is block-scoped while 'let' is function-scoped",
          "'let' is block-scoped while 'var' is function-scoped",
          "'let' is used for constants and 'var' is used for variables",
          "There is no difference"
        ],
        "correctAnswer": "'let' is block-scoped while 'var' is function-scoped"
      },
      {
        "category": "JavaScript",
        "question": "What is a closure in JavaScript?",
        "options": [
          "A function that runs as soon as it is defined",
          "A function that is used to create classes",
          "A function that has access to its own scope, the outer function’s scope, and the global scope",
          "A function that is used to handle events"
        ],
        "correctAnswer": "A function that has access to its own scope, the outer function’s scope, and the global scope"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'async' keyword in JavaScript?",
        "options": [
          "To create a new thread",
          "To pause execution of a function",
          "To handle errors",
          "To define a function that returns a Promise"
        ],
        "correctAnswer": "To define a function that returns a Promise"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'await' keyword in JavaScript?",
        "options": [
          "To create a new thread",
          "To pause the execution of an async function until the Promise is resolved",
          "To handle errors",
          "To declare a variable"
        ],
        "correctAnswer": "To pause the execution of an async function until the Promise is resolved"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'fetch' method in JavaScript?",
        "options": [
          "To create a new thread",
          "To handle errors",
          "To make HTTP requests and handle responses",
          "To sort an array"
        ],
        "correctAnswer": "To make HTTP requests and handle responses"
      },
      {
        "category": "JavaScript",
        "question": "What is the difference between 'null' and 'undefined' in JavaScript?",
        "options": [
          "'undefined' is an assigned value representing no value, while 'null' means a variable has been declared but not assigned a value",
          "There is no difference",
          "'null' is used for objects and 'undefined' is used for arrays",
          "'null' is an assigned value representing no value, while 'undefined' means a variable has been declared but not assigned a value"
        ],
        "correctAnswer": "'null' is an assigned value representing no value, while 'undefined' means a variable has been declared but not assigned a value"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'bind' method in JavaScript?",
        "options": [
          "To create a new thread",
          "To handle errors",
          "To create a new function with the same function body but with a different 'this' value",
          "To sort an array"
        ],
        "correctAnswer": "To create a new function with the same function body but with a different 'this' value"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'apply' method in JavaScript?",
        "options": [
          "To create a new thread",
          "To call a function with a given 'this' value and arguments provided as an array",
          "To handle errors",
          "To sort an array"
        ],
        "correctAnswer": "To call a function with a given 'this' value and arguments provided as an array"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'call' method in JavaScript?",
        "options": [
          "To create a new thread",
          "To handle errors",
          "To call a function with a given 'this' value and arguments provided individually",
          "To sort an array"
        ],
        "correctAnswer": "To call a function with a given 'this' value and arguments provided individually"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'reduce' method in JavaScript?",
        "options": [
          "To add a new element to an array",
          "To apply a function against an accumulator and each element in the array to reduce it to a single value",
          "To remove an element from an array",
          "To sort an array in ascending order"
        ],
        "correctAnswer": "To apply a function against an accumulator and each element in the array to reduce it to a single value"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'filter' method in JavaScript?",
        "options": [
          "To add a new element to an array",
          "To remove an element from an array",
          "To sort an array in ascending order",
          "To create a new array with all elements that pass the test implemented by the provided function"
        ],
        "correctAnswer": "To create a new array with all elements that pass the test implemented by the provided function"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'find' method in JavaScript?",
        "options": [
          "To add a new element to an array",
          "To return the value of the first element in the array that satisfies the provided testing function",
          "To remove an element from an array",
          "To sort an array in ascending order"
        ],
        "correctAnswer": "To return the value of the first element in the array that satisfies the provided testing function"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'includes' method in JavaScript?",
        "options": [
          "To add a new element to an array",
          "To remove an element from an array",
          "To determine whether an array includes a certain value among its entries",
          "To sort an array in ascending order"
        ],
        "correctAnswer": "To determine whether an array includes a certain value among its entries"
      },
      {
        "category": "JavaScript",
        "question": "What is the purpose of the 'parseInt' function in JavaScript?",
        "options": [
          "To convert a number to a string",
          "To parse a string argument and return an integer",
          "To sort an array in ascending order",
          "To create a new array"
        ],
        "correctAnswer": "To parse a string argument and return an integer"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `ls` command in Linux?",
        "options": [
          "To change the current directory",
          "To copy files",
          "To delete files",
          "To list directory contents"
        ],
        "correctAnswer": "To list directory contents"
      },
      {
        "category": "Linux",
        "question": "Which command is used to change the current directory in Linux?",
        "options": [
          "mv",
          "ls",
          "cp",
          "cd"
        ],
        "correctAnswer": "cd"
      },
      {
        "category": "Linux",
        "question": "What does the `pwd` command do in Linux?",
        "options": [
          "Changes the current directory",
          "Deletes files",
          "Copies files",
          "Prints the current working directory"
        ],
        "correctAnswer": "Prints the current working directory"
      },
      {
        "category": "Linux",
        "question": "Which command is used to copy files in Linux?",
        "options": [
          "mv",
          "rm",
          "cd",
          "cp"
        ],
        "correctAnswer": "cp"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `mv` command in Linux?",
        "options": [
          "To copy files",
          "To list directory contents",
          "To move or rename files",
          "To delete files"
        ],
        "correctAnswer": "To move or rename files"
      },
      {
        "category": "Linux",
        "question": "Which command is used to delete files in Linux?",
        "options": [
          "mv",
          "ls",
          "DELETE",
          "rm"
        ],
        "correctAnswer": "rm"
      },
      {
        "category": "Linux",
        "question": "What does the `chmod` command do in Linux?",
        "options": [
          "Lists directory contents",
          "Changes file permissions",
          "Changes file ownership",
          "Creates a new directory"
        ],
        "correctAnswer": "Changes file permissions"
      },
      {
        "category": "Linux",
        "question": "Which command is used to display the contents of a file in Linux?",
        "options": [
          "ls",
          "cat",
          "mv",
          "rm"
        ],
        "correctAnswer": "cat"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `mkdir` command in Linux?",
        "options": [
          "To change the current directory",
          "To delete a directory",
          "To list directory contents",
          "To create a new directory"
        ],
        "correctAnswer": "To create a new directory"
      },
      {
        "category": "Linux",
        "question": "Which command is used to remove a directory in Linux?",
        "options": [
          "mkdir",
          "cd",
          "ls",
          "rmdir"
        ],
        "correctAnswer": "rmdir"
      },
      {
        "category": "Linux",
        "question": "What does the `echo` command do in Linux?",
        "options": [
          "Creates a new file",
          "Lists directory contents",
          "Displays a line of text",
          "Deletes a file"
        ],
        "correctAnswer": "Displays a line of text"
      },
      {
        "category": "Linux",
        "question": "Which command is used to display the first few lines of a file in Linux?",
        "options": [
          "cat",
          "less",
          "tail",
          "head"
        ],
        "correctAnswer": "head"
      },
      {
        "category": "Linux",
        "question": "Which command is used to display the last few lines of a file in Linux?",
        "options": [
          "head",
          "cat",
          "more",
          "tail"
        ],
        "correctAnswer": "tail"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `grep` command in Linux?",
        "options": [
          "To copy files",
          "To delete files",
          "To search for text in files",
          "To list directory contents"
        ],
        "correctAnswer": "To search for text in files"
      },
      {
        "category": "Linux",
        "question": "Which command is used to display the disk usage of files and directories in Linux?",
        "options": [
          "df",
          "chmod",
          "ls",
          "du"
        ],
        "correctAnswer": "du"
      },
      {
        "category": "Linux",
        "question": "What does the `ps` command do in Linux?",
        "options": [
          "Lists directory contents",
          "Displays information about running processes",
          "Deletes files",
          "Changes file permissions"
        ],
        "correctAnswer": "Displays information about running processes"
      },
      {
        "category": "Linux",
        "question": "Which command is used to terminate a process in Linux?",
        "options": [
          "ps",
          "df",
          "kill",
          "top"
        ],
        "correctAnswer": "kill"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `top` command in Linux?",
        "options": [
          "Lists directory contents",
          "Displays real-time information about system performance and processes",
          "Changes file permissions",
          "Copies files"
        ],
        "correctAnswer": "Displays real-time information about system performance and processes"
      },
      {
        "category": "Linux",
        "question": "Which command is used to change file ownership in Linux?",
        "options": [
          "chgrp",
          "chmod",
          "ls",
          "chown"
        ],
        "correctAnswer": "chown"
      },
      {
        "category": "Linux",
        "question": "What does the `df` command do in Linux?",
        "options": [
          "Lists directory contents",
          "Deletes files",
          "Displays the amount of disk space used and available on file systems",
          "Changes file permissions"
        ],
        "correctAnswer": "Displays the amount of disk space used and available on file systems"
      },
      {
        "category": "Linux",
        "question": "Which command is used to create an empty file in Linux?",
        "options": [
          "cat",
          "rm",
          "touch",
          "echo"
        ],
        "correctAnswer": "touch"
      },
      {
        "category": "Linux",
        "question": "What is the purpose of the `ln` command in Linux?",
        "options": [
          "Copies a file",
          "Moves a file",
          "Deletes a file",
          "Creates a link to a file"
        ],
        "correctAnswer": "Creates a link to a file"
      },
      {
        "category": "Linux",
        "question": "Which command is used to compress files in Linux?",
        "options": [
          "tar",
          "zip",
          "gzip",
          "unzip"
        ],
        "correctAnswer": "gzip"
      },
      {
        "category": "Linux",
        "question": "Which command is used to extract files from a tarball in Linux?",
        "options": [
          "unzip",
          "tar -cvf",
          "gzip",
          "tar -xvf"
        ],
        "correctAnswer": "tar -xvf"
      },
      {
        "category": "Linux",
        "question": "What does the `man` command do in Linux?",
        "options": [
          "Copies files",
          "Deletes files",
          "Lists directory contents",
          "Displays the manual for a command"
        ],
        "correctAnswer": "Displays the manual for a command"
      }
    ]
