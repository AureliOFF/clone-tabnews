function status(request, response) {
  response.status(200).json({ chave: "Teste do curso.dev" });
}

export default status;
