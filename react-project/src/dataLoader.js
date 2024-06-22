export async function isNameInDatabase(name, jsonUrl) {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Searching for name: ${name}`);
      const nameFound = data.some(athlete => athlete.name === name);
      console.log(`Found: ${nameFound}`);
      return nameFound;
    } catch (error) {
      console.error("Erro ao buscar ou processar o arquivo JSON:", error);
      return false;
    }
  }
  
  
  