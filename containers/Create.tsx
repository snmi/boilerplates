import Create from '../components/Create'
import { connect } from 'dva'

function mapStateToProps({ appCreate }: StoreState) {
  return {
    terminalList: appCreate.terminalList
  }
}

export default connect(mapStateToProps)(Create)
