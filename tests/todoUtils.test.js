import { describe, test, expect } from 'vitest'; // Dòng quan trọng nhất để sửa lỗi CI [cite: 142]
import {
  validateTodo,
  addTodo,
  toggleTodoStatus,
  filterTodos,
  sortTodosByPriority,
  getTodoStats,
} from "../src/utils/todoUtils"; [cite: 356-363]

describe("todoUtils", () => {
  const sampleTodos = [
    { id: 1, title: "Task A", priority: "medium", completed: false },
    { id: 2, title: "Task B", priority: "high", completed: true },
    { id: 3, title: "Task C", priority: "low", completed: false },
  ]; [cite: 364-369]

  test("validateTodo should accept valid todo", () => {
    expect(
      validateTodo({
        id: 1,
        title: "Learn Vitest",
        priority: "high",
        completed: false,
      })
    ).toBe(true);
  }); [cite: 370-381]

  test("validateTodo should throw if title is empty", () => {
    expect(() =>
      validateTodo({
        id: 1,
        title: "",
        priority: "high",
        completed: false,
      })
    ).toThrow();
  }); [cite: 382-390]

  test("addTodo should add new todo", () => {
    const newTodo = {
      id: 4,
      title: "Task D",
      priority: "medium",
      completed: false,
    };
    const result = addTodo(sampleTodos, newTodo);
    expect(result).toHaveLength(4);
    expect(result[3].title).toBe("Task D");
  }); [cite: 391-401]

  test("toggleTodoStatus should change completed state", () => {
    const result = toggleTodoStatus(sampleTodos, 1);
    expect(result[0].completed).toBe(true);
  }); [cite: 402-405]

  test("filterTodos should return completed todos", () => {
    const result = filterTodos(sampleTodos, "completed");
    expect(result).toHaveLength(1);
  }); [cite: 406-408]

  test("sortTodosByPriority should put high first", () => {
    const result = sortTodosByPriority(sampleTodos);
    expect(result[0].priority).toBe("high");
  }); [cite: 409-411]

  test("getTodoStats should return correct stats", () => {
    const result = getTodoStats(sampleTodos);
    expect(result).toEqual({
      total: 3,
      completed: 1,
      pending: 2,
    });
  }); [cite: 412-422]
});