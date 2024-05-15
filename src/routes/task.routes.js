import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import {
  getTask,
  getTasks,
  deleteTasks,
  createTasks,
  updatetasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.midellware.js";
import { createTaskSchema } from "../schemas/task.schem.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTasks
);

router.delete("/tasks/:id", authRequired, deleteTasks);

router.put("/tasks/:id", authRequired, updatetasks);

export default router;
