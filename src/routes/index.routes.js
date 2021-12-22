import { Router } from 'express';
import { renderTasks, addTasks, getTaskById, editTaskById, deleteTaskById, taskToggleDone } from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", addTasks);

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/edit/:id", getTaskById);

router.post("/edit/:id", editTaskById);

router.get("/delete/:id", deleteTaskById);

router.get("/toggle-done/:id", taskToggleDone);

export default router;