// Step 1: Data model
/*{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}*/

// Step 2: Initialize variables
let todosArray = [];
let nextId = 1;

// Add an element

function addOne(task, completed, dueDate) {
  // Check if any parameter is empty or undefined
  if (!task || typeof completed !== "boolean" || !dueDate) {
    return false;
  }

  const newTodo = {
    id: nextId++, // Assigns a unique id and increments it
    task,
    completed,
    dueDate,
  };
  todosArray.push(newTodo);
  return newTodo;
}

// Step 3: Read All element
function getAll() {
  return todosArray;
}

// Step 4: Read an Element by ID:
function findById(id) {
  const numericId = Number(id); // Converts the ID to a number
  const todo = todosArray.find((item) => item.id === numericId); // Finds the todo with the matching ID
  return todo || false; // Returns the todo or false if not found
}

// Step 5: Update an Element by ID
function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
    // Update properties only if they are provided in updatedData
    if (updatedData.task) todo.task = updatedData.task;
    if (updatedData.completed) todo.completed = updatedData.completed;
    if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
    return todo; // Returns the updated todo object
  }
  return false; // Returns false if the todo with the provided ID is not found
}

// Step 6:Delete an element by ID:
function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
    const initialLength = todosArray.length;
    todosArray = todosArray.filter((todo) => todo.id !== Number(id)); // Filters out the todo with the matching ID
    return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
  }
  return false; // Returns false if the todo was not found
}

// Step 7: Testing the Module:

if (require.main === module) {
  // Add todos
  let result = addOne("Buy groceries", false, "2025-08-30");
  console.log(result);
  result = addOne("Pay Bills", false, "2025-09-31");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, {
      task: "Activity1",
      completed: true,
      dueDate: "2015-9-11",
    })
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

// Exporting Module
const Todo = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Todo;
