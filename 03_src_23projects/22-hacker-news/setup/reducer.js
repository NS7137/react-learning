import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH
} from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: payload.hits,
        nbPages: payload.nbPages
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter(story => story.objectID !== payload)
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: payload,
        page: 0
      };
    case HANDLE_PAGE:
      if (payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      break;
    default:
      throw new Error(`no matching "${type}" action type`);
  }
};
export default reducer;
