/**
 * @checkbox
 * checked: {bool}
 * disabled: {bool}
 * onChange: {func}
 */

import React from 'react'
import PropTypes from 'prop-types'
// import styles from './Checkbox.less'
import 'rc-hoho-checkbox/assets/index.less'

class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    onChange: PropTypes.func,
  }

  constructor (props) {
    super(props)
    this.state = {
      isChecked: this.props.checked,
    }
  }

  handleChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    })
    const { onChange } = this.props
    onChange && onChange(e)
  }
  render () {
    const { children, disabled } = this.props
    const { isChecked } = this.state
    return (
      <label className={`hoho_checkbox_wrapper ${disabled ? 'hoho_checkbox_disabled' : ''}`}>
        <span className={`hoho_checkbox ${isChecked ? 'hoho_checkbox_checked' : ''}`}>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={this.handleChange}
            disabled={disabled}
            className='hoho_checkbox_input'/>
          <span className='hoho_checkbox_inner'></span>
        </span>{children}
      </label>
    )
  }
}
export default Checkbox
