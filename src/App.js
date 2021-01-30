import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Dash from './Components/Pages/Dash'
import SignIn from './Components/Auth/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dash}/>
          <Route exact path='/signin' component={SignIn}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
