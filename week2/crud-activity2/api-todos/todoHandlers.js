// Step 1: Import todoLib
const Todo = require("./todoLib");

// Step 2: Get All todos (GET / todos)
const getAllTodos = (req, res) => {
  const todos = Todo.getAll();
  res.json(todos);
};

// Step 3: Create a new todo (POST / todos)
const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = Todo.addOne(task, completed, dueDate);

  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

// Step 4: Get a todo by ID (GET /todos/:todoId)
const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = Todo.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Step 5: Update a Todo by ID (PUT /todo/:todoId)
const updateTodo = (req, res) => {
  const todoId = req.params.todoId;

  const { task, completed, dueDate } = req.body;

  const updatedTodo = Todo.updateOneById(todoId, {
    task,
    completed,
    dueDate,
  });

  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Step 6: Delete a Todo by Id (DELETE /todos/:todoId)
const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = Todo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Export the Handlers
module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
