import React from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import Ganre from './Genre'
import ShopInfo from './ShopInfo'
const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/Genre' component={Ganre}/>
                <Route exact path='/shopinfo' component={ShopInfo}/>
            </Switch>
        </HashRouter>
    )
}

export default App