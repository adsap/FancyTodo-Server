const { Todo } = require('../models');

class TodoController {

  static add(req, res, next) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      due_date: req.body.due_date,
      UserId: req.userId
    }
    Todo.create(todo)
      .then(todo => {
        res.status(201).json({ data: todo })
      })
      .catch((err) => next(err));
  }

  static display(req, res, next) {
    Todo.findAll({ 
      where: { UserId: req.userId },
      order: [['due_date', 'ASC']] 
    })
      .then(todos => {
        res.status(200).json({ data: todos })
      })
      .catch((err) => next(err));
  }

  static detail(req, res) {
    res.status(200).json({ data: req.todo });
  }

  static update(req, res, next) {
    const { title, description, status, due_date } = req.body
    const { todo } = req

    todo.title = title
    todo.description = description
    todo.status = status
    todo.due_date = due_date

    todo.save()
      .then((_) => {
        res.status(200).json({ data: todo });
      })
      .catch((err) => next(err));
  }

  static updateStatus(req, res, next) {
    const { status } = req.body
    const { todo } = req

    todo.status = status

    todo.save()
      .then((_) => {
        res.status(200).json({ data: todo });
      })
      .catch((err) => next(err));
  }

  static delete(req, res, next) {
    const { todo } = req

    todo.destroy()
      .then((_) => {
        res.status(200).json({ message: 'Todo success to delete' });
      })
      .catch((err) => next(err));
  }
}

module.exports = TodoController