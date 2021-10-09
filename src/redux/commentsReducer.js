import * as ActionTypes from './ActionTypes';
import { CommentsData } from '../Data/commentsData';

export const commentsReducer = (state = { CommentsData: CommentsData}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.CommentsData.length;
      return {...state, CommentsData: CommentsData.concat(comment)};
    default:
        return state;
  }
}
