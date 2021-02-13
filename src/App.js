import React from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import Ganre from './Genre'
import ShopInfo from './ShopInfo'
import TopPage from './Top'
const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='(/)?' component={TopPage}/>
                <Route exact path='/genre' component={Ganre}/>
                <Route exact path='/shopinfo' component={ShopInfo}/>
            </Switch>
        </HashRouter>
    )
}

export default App