import * as ActionTypes from './ActionTypes';

export const addComment = (blogId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        blogId: blogId,
        rating: rating,
        author: author,
        text: text
    }
});