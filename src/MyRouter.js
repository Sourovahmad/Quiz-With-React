import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';



const MyRouter = () => {
    return (
        <div>

            <Switch>

               <Route exact path="/" > <Home />  </Route>

            </Switch>
                
        </div>
    );
};

export default MyRouter;