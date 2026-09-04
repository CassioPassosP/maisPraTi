const minhaPromise = new Promise((resolve, reject) => { 
  setTimeout(() => {
    const successo = true;

    if (successo) {
      resolve("Dados carregados com sucesso!");
    } else {
      reject(new Error("Falha ao carregar os dados."));
    }
  }, 3000);
});

console.log('teste');

minhaPromise.then(result => {
    console.log(result);
  }).catch(error => {
    console.error("Error:", error);
  }).finally(() => {
    console.log("Operacao concluida.");
  });