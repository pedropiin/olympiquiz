class DataService {
    constructor() {
      if (!DataService.instance) {
        this.baseUrl = 'https://raw.githubusercontent.com/pedropiin/olympiquiz/search_bar/handling_data/data/medalists-easy.json';
        DataService.instance = this;
      }
      return DataService.instance;
    }
  
    fetchData(query) {
      return fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => data.filter(user => user.name.toLowerCase().includes(query.toLowerCase())));
    }
  }
  
  const instance = new DataService();
  Object.freeze(instance);
  
  export default instance;
  