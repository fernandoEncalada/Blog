export const getCategories = async() => {

    const url = 'http://localhost:8082/api/categories';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data;
  }