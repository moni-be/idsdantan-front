import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Livre from './Pages/LivresEtRevues/Livre'
import Revue from './Pages/LivresEtRevues/Revue'
import MentionsLegales from './Pages/PagesFooter/MentionsLegales'
import NousJoindre from './Pages/PagesFooter/NousJoindre'
import PageProdBook from './Pages/LivresEtRevues/PageProdBook'
import PageProdRevue from './Pages/LivresEtRevues/PageProdRevue'
import './App.css'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/livre' component={Livre} />
        <Route path='/revue' component={Revue} />
        <Route path='/mentions-legales' component={MentionsLegales} />
        <Route path='/nous-joindre' component={NousJoindre} />
        <Route path='/mon-livre' component={PageProdBook} />
        <Route path='/ma-revue' component={PageProdRevue} />
      </Switch>
    </div>
  )
}

export default App
