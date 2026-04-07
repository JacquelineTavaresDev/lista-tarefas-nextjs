"use client";

import { useState } from "react";
import { Tarefa } from "../data/tarefas";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import styles from "../app/page.module.css";

interface Props {
  tarefasIniciais: Tarefa[];
}

export default function NovaTarefa({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const [texto, setTexto] = useState("");

  const total = useContadorDeTarefas(tarefas);

  function adicionarTarefa() {
    if (!texto.trim()) return;

    const nova = {
      id: Date.now(),
      texto,
    };

    setTarefas([...tarefas, nova]);
    setTexto("");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Tarefas</h1>

      <p className={styles.counter}>Total de tarefas: {total}</p>

      <div className={styles.inputGroup}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa"
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className={styles.list}>
        {tarefas.map((t) => (
          <li key={t.id} className={styles.item}>
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
