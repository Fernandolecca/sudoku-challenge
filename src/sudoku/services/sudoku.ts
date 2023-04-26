export async function getPuzzleSolution(puzzle: string) {
  const url = import.meta.env.VITE_CORS_PROXY + import.meta.env.VITE_API_URL!;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sudoku: [puzzle],
    }),
  });

  const { data } = await response.json();
  return data[0].solution;
}
