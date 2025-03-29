import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';

const MarketingLazy = lazy(()=> import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

//whenever we build for prod, generate with prefix ma on the css classname
const generateClassName = createGenerateClassName({
    productionPrefix:'co'
});


export default () =>{
    const [isSignedIn, setIsSignedIn]  = useState();
    return (
        <BrowserRouter>
         <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                          <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
        </BrowserRouter>
    )
}