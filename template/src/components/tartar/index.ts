import TartarAntd from './Tartar.antd'

export interface TartarProps {
  count: number
  add: (count: number) => void
}

export interface TartarState {
  popVisible: boolean
}

export default TartarAntd
