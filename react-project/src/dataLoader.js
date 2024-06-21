async function isNameInDatabase(name, jsonUrl) {
    try {
      const response = await fetch(jsonUrl);
      const data = await response.json();
  
      // Supomos que a base de dados seja um array de objetos e cada objeto tenha uma propriedade 'name'.
      const nameFound = data.some(athlete => athlete.name === name);
      return nameFound;
    } catch (error) {
      console.error("Erro ao buscar ou processar o arquivo JSON:", error);
      return false;
    }
  }