import React from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import Ganre from './Genre'
import ShopInfo from './ShopInfo'
import Special from './Special'
const App = () => {

    return (

        <HashRouter>
            <Switch>
                <Route exact path='/genre' component={Ganre} />
                <Route exact path='/shopinfo' component={ShopInfo} />
                <Route exact path='/feature' component={Special} />
            </Switch>
        </HashRouter>
    )
}

export default App