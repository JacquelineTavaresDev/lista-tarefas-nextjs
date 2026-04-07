import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("Componente NovaTarefa", () => {
  test("renderiza input e botão", () => {
    render(<NovaTarefa tarefasIniciais={[]} />);

    expect(
      screen.getByPlaceholderText("Digite uma tarefa")
    ).toBeInTheDocument();

    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  test("adiciona uma nova tarefa", () => {
    render(<NovaTarefa tarefasIniciais={[]} />);

    const input = screen.getByPlaceholderText("Digite uma tarefa");
    const botao = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Nova tarefa" } });
    fireEvent.click(botao);

    expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
  });

  test("não adiciona tarefa vazia", () => {
    render(<NovaTarefa tarefasIniciais={[]} />);

    const botao = screen.getByText("Adicionar");

    fireEvent.click(botao);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("atualiza o contador ao adicionar tarefa", () => {
    render(<NovaTarefa tarefasIniciais={[]} />);

    const input = screen.getByPlaceholderText("Digite uma tarefa");
    const botao = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "Tarefa 1" } });
    fireEvent.click(botao);

    expect(
      screen.getByText(/Total de tarefas: 1/i)
    ).toBeInTheDocument();
  });

  test("renderiza tarefas iniciais corretamente", () => {
    const tarefas = [
      { id: 1, texto: "Tarefa inicial 1" },
      { id: 2, texto: "Tarefa inicial 2" },
    ];

    render(<NovaTarefa tarefasIniciais={tarefas} />);

    expect(screen.getByText("Tarefa inicial 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa inicial 2")).toBeInTheDocument();
  });
});
