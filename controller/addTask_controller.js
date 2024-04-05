const task = require("../model/task");

module.exports.addTask = function (req, res) {
  task.create(
    {
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.due_date,
    },
    function (error, newTask) {
      if (error) {
        return console.log(error.message);
      }
    }
  );
  res.redirect("back");
};
