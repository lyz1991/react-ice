import React from 'react'
import routes from './routes'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        { routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            component={route.components}
            onEnter={() => {
            }}>

          </Route>
        )}
      </BrowserRouter>
    )
  }
}
export default App