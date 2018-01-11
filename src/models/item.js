import { fetchPostById } from "../services/post";

export default {
  namespace: 'item',

  state: {
    item: {},
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      console.log("fetch post!")
      const response = yield call(fetchPostById, payload);
      console.log(response)
      yield put({
        type: 'queryItem',
        payload: response,
      });
    },
  },

  reducers: {
    queryItem(state, action) {
      return {
        ...state,
        item: action.payload,
      };
    },
  },
};
