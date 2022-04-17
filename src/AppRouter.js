import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Estudios } from './components/Estudios';
import { Experiencia } from './components/Experiencia';
import { Habilidades } from './components/Habilidades';
import { Home } from './components/Home';
import { Idiomas } from './components/Idiomas';
import { Menu } from './components/Menu';
import { QuienSoy } from './components/QuienSoy';



export const AppRouter = () => {
    return (
        <Router>
            <Menu />
            <div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/quiensoy" component={QuienSoy} />
                    <Route exact path="/experiencia" component={Experiencia} />
                    <Route exact path="/estudios" component={Estudios} />
                    <Route exact path="/habilidades" component={Habilidades} />
                    <Route exact path="/idiomas" component={Idiomas} />

                    <Redirect to="./" />
                </Switch>
            </div>
        </Router>
    )
}
