import React from 'react'
import TopNav from './TopNav'
import {useAuth} from '../../Context/AuthContext'
import LoadingModal from '../Common/LoadingModal'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import TeamDetails from '../Pages/TeamDetails'
import Teams from '../Pages/Teams'
import FreeAgents from '../Pages/FreeAgents'
import History from '../Pages/History'
import Draft from '../Pages/Draft'
import Dash from '../Pages/Dash'

export default function Layout() {

    const {path} = useRouteMatch()
    const {currentUser} = useAuth()

    if(!currentUser) return<LoadingModal/>

    return (
        <div>
            <TopNav/>
            <Switch>
                <Route exact path= {`${path}`} component={Dash}/>
                <Route path= {`${path}/team`} component={TeamDetails}/>
                <Route path= {`${path}/teams`} component={Teams}/>
                <Route path= {`${path}/fa`} component={FreeAgents}/>
                <Route path= {`${path}/history`} component={History}/>
                <Route path= {`${path}/draft`} component={Draft}/>
            </Switch>
        </div>
    )
}
