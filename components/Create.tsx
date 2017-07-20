import { Props } from './Create.d'

import styles from './Create.less'
import CssModules from 'react-css-modules'

import * as React from 'react'

@CssModules(styles)
class Create extends React.Component<Props, null> {

  componentWillMount() {
    this.props.dispatch({ type: 'appCreate/init' })
  }

  render() {
    return (
      <div styleName="create">Hello,{JSON.stringify(this.props.terminalList)}</div>
    )
  }
}

export default Create
