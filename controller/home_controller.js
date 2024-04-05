const task = require("../model/task");
module.exports.home = function (req, res) {
  task.find({}, function (error, task) {
    if (error) {
      return console.log("Error in fetching contacts");
    }
    res.render("home", { task: task });
  });
};
