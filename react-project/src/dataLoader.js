export async function isNameInDatabase(pessoa, jsonUrl) {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Searching for name: ${pessoa}`);
      const nameFound = data.some(athlete => athlete === pessoa);
      console.log(`Found: ${nameFound}`);
      return nameFound;
    } catch (error) {
      console.error("Erro ao buscar ou processar o arquivo JSON:", error);
      return false;
    }
  }
  
  
  