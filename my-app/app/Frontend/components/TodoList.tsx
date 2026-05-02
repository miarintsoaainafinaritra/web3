"use client";
import { useState, useEffect } from "react";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const [todos, setTodos] = useState<{id: number, text: string}[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const s = localStorage.getItem("todos");
    if (s) setTodos(JSON.parse(s));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <input className={styles.input} value={input} onChange={e => setInput(e.target.value)} placeholder="Tâche..." />
        <button className="btn btn-primary" onClick={add}>+</button>
      </div>
      <ul className={styles.list}>
        {todos.map(t => (
          <li key={t.id} className={styles.item}>
            {t.text}
            <button className={styles.del} onClick={() => setTodos(todos.filter(x => x.id !== t.id))}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
