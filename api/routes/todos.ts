import { Router } from "https://deno.land/x/oak@14.2.0/mod.ts";

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post("/todos", async (ctx) => {
  if (!ctx.request.hasBody) {
    ctx.throw(415);
  }
  const data = await ctx.request.body.json();

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: data.text,
  };
  todos.push(newTodo);
  ctx.response.status = 201;
  ctx.response.body = { message: "Created new todo", todo: newTodo };
});

router.put("/todos/:todoId", async (ctx) => {
  const data = await ctx.request.body.json();
  const tid = ctx.params.todoId;

  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });

  todos[todoIndex] = { id: todos[todoIndex].id, text: data.text };
  ctx.response.status = 201;
  ctx.response.body = { message: "To do updated", todo: todos[todoIndex] };
});

router.delete("/todos/:todoId", (ctx) => {});

export default router;
