/* eslint no-console:0 */

import 'rc-hoho-checkbox/assets/index.less';
import Checkbox from '../src/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Demo extends React.Component<any, any> {

  constructor (props) {
    super(props)
    this.state = {
      check1: true,
      check2: true,
      check3: false,
      check4: true,
    }
  }

  handleCheck1 = (e) => {
    this.setState({
      check1: e.target.checked,
    })
  }

  render() {
    const { check1, check2, check3, check4 } = this.state
    return (<div style={{ margin: '10px 0' }}>
      <h2>Checkbox</h2>
      <div>
        <Checkbox onChange={this.handleCheck1} checked={check1} />
        <Checkbox checked={check2}>hansin</Checkbox>
        <Checkbox checked={check3} disabled={true}>disabled</Checkbox>
        <Checkbox checked={check4} disabled={true} />
      </div>
    </div>);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
