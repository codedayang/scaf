import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';
import {createLogger} from 'redux-logger'

let app;
let store;
let dispatch;

function createApp(opt) {
  // redux日志
  opt.onAction = [createLogger()];
  opt.onError = (err) => {
    console.error(err);
    Taro.hideLoading();
    Taro.showToast({ title: '服务器错误'});
  };
  app = create(opt);
  app.use(createLoading({}));

  // @ts-ignore
  if (!global.registered) opt.models.forEach((model) => app.model(model));
  // @ts-ignore
  global.registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
