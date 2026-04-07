import { getTarefas } from "../data/tarefas";
import NovaTarefa from "../components/NovaTarefa";

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main>
      <NovaTarefa tarefasIniciais={tarefas} />
    </main>
  );
}
