import { getPublications } from "../../helpers/getPublications"

export const getArticleById = ( publications, id ) => {

    return publications.find(article => article.id === parseInt(id));
}