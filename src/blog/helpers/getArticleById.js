import { getPublications } from "../../helpers/getPublications"

export const getArticleById = async( id ) => {
    const data  = await getPublications(10);

    return data.content.find(article => article.id === parseInt(id));
}