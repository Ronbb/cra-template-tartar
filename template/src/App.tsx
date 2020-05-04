import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Tartar from './containers/Tartar'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Tartar />
          </Route>
          {/* <Route path="/history">
          <HistoryPage />
        </Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App
