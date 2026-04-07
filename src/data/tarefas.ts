export interface Tarefa {
  id: number;
  texto: string;
}

export async function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([
    { id: 1, texto: "Estudar Next.js" },
    { id: 2, texto: "Fazer atividades" },
  ]);
}
