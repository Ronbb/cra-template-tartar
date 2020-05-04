import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { GlobalState } from '../redux/reducers'
import Tartar from '../components/tartar'
import { addTartar } from '../redux/actions'

const mapStateToProps = (state: GlobalState) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (count: number) => dispatch(addTartar(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tartar)
