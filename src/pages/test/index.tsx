
import Taro from '@tarojs/taro'
import {Text, View} from '@tarojs/components';
import { connect } from 'react-redux';

import { StateType } from '../../models/testModel';
import { ConnectProps, ConnectState } from '../../models/connect';

import './index.scss';
import {AtButton} from "taro-ui";
import React from "react";

import dva from "../../utils/dva"

interface OwnProps {
  // 父组件要传的prop放这
  // model那边管理的状态
  str: string;
}
interface OwnState {
  // 自己要用的state
  // 只自己使用的State
}
type IProps = StateType & ConnectProps & OwnProps;
//下面第一个参数是model的namespace，默认生成和页面名相同
@connect(({test, loading}: ConnectState) => ({
  ...test,
  ...loading,
  dispatch: dva.getDispatch()
}))
class Test extends React.Component<IProps, OwnState> {
  handleClick() {
    this.props.dispatch({
      type: "test/load"
    })
  }

  componentDidMount() {
  }

  render() {
    const {} = this.props;
    return <View className="index">
      <AtButton type="primary" size="small" className="btn" onClick={this.handleClick}>按钮</AtButton>
      <Text>{this.props.str}</Text>
    </View>;
  }
}
export default Test;
