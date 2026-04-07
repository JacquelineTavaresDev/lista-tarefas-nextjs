import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Página Home (Server Component)", () => {
  test("renderiza o título da página", async () => {
    const Page = await Home();

    render(Page);

    expect(
      screen.getByText(/Lista de Tarefas/i)
    ).toBeInTheDocument();
  });

  test("renderiza tarefas vindas da API simulada", async () => {
    const Page = await Home();

    render(Page);

    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
    expect(screen.getByText("Fazer atividades")).toBeInTheDocument();
  });
});
