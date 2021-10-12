import * as ActionTypes from './ActionTypes';
import { CommentsData } from '../Data/commentsData';

export const commentsReducer = (state = { CommentsDataUpdated: CommentsData}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.CommentsDataUpdated.length;
      comment.date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date());
      return {...state, CommentsDataUpdated: state.CommentsDataUpdated.concat(comment)};
    default:
        return state;
  }
}
