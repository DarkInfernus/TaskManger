module.exports.deleteTask = async function (req, res) {
  const tasks = req.body.description;
  const list = require("../model/task");
  if (typeof tasks === "object") {
    for (let i = 0; i < tasks.length; i++) {
      const t = await list.deleteOne({ description: tasks[i] });
    }
  } else {
    await list.deleteOne({ description: tasks });
  }

  res.redirect("back");
};
