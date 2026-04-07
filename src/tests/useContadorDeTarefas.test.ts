import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

test("retorna a quantidade correta de tarefas", () => {
  const { result } = renderHook(() =>
    useContadorDeTarefas([
      { id: 1, texto: "A" },
      { id: 2, texto: "B" },
    ])
  );

  expect(result.current).toBe(2);
});
