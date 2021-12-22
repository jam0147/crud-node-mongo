import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
};

export const addTasks =  async (req, res) => {
    try {
        const task = Task(req.body);
        const taskSaved = await task.save();    
    } catch (error) {
        console.log(error);cls
    }
    res.redirect("/")
};

export const getTaskById =  async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render("edit", { task: task });
    } catch (error) {
        console.error(error);
    }
};

export const editTaskById =  async (req, res) => {
    const { id } = req.params;
    const taskUpdated = await Task.findByIdAndUpdate(id, req.body);

    res.redirect("/");
};

export const deleteTaskById =  async (req, res) => {
    const { id } = req.params;
    const taskRemoved = await Task.findByIdAndRemove(id);

    res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);

    task.done = !task.done;
    await task.save();

    res.redirect("/");
}