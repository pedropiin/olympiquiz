export async function isNameInDatabase(name, jsonUrl) {
    try {
      console.log(`Fetching data from: ${jsonUrl}`);
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
  
      console.log('Data loaded:', data);
  
      // Verifique a estrutura dos dados
      if (!Array.isArray(data)) {
        throw new Error("Data format is incorrect. Expected an array.");
      }
  
      // Supomos que a base de dados seja um array de objetos e cada objeto tenha uma propriedade 'name'.
      const nameFound = data.some(athlete => athlete.name === name);
      console.log(`Searching for name: ${name}. Found: ${nameFound}`);
      return nameFound;
    } catch (error) {
      console.error("Erro ao buscar ou processar o arquivo JSON:", error);
      return false;
    }
  }
  
  