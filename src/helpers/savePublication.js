export const savePublication = async() => {
    const url = 'http://localhost:8082/api/publications/1?category_id=1';

    const newPublication = {
        title: '',
        description: '',
        content: '',
        comments: [],
        categoryId: 1,
        picture: "",
        user_id: 1
    }
    
    const data = await axios.post(url, newPublication);
    console.log(data);
}