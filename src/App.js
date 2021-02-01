import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import SignIn from './Components/Auth/SignIn'
import AuthProvider from './Context/AuthContext'
import PrivateRoute from './Components/Auth/PrivateRoute'
import RedirectPage from './Components/Pages/RedirectPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path='/' component={RedirectPage}/>
            <PrivateRoute path='/dashboard' component={Layout}/>
            <Route path='/signin' component={SignIn}/>
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
