export const getPublications = async(size = 10) => {

  const url = `http://localhost:8082/api/publications?page=0&size=${size}&sortBy=id&sortDir=asc`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}