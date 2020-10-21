import { Reducer } from 'redux';
import { Model } from 'dva';
import * as Api from '../service/apiService';

export interface StateType {
  str: string;
}

interface ModelType {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {
    save: Reducer;
  };
}

const model: Model & ModelType = {
  namespace: 'test',
  state: {
    str: "1"
  },
  effects: {
    *load({ payload }, { call, put }) {
      const res = yield call(Api.tec, { payload });
      yield put({
        type: 'save',
        payload: {
          str: res[0]._id
        }
      });
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};

export default model;
