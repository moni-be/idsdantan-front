import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Livre from './Pages/LivresEtRevue/Livre'
import Revue from './Pages/LivresEtRevue/Revue'
import MentionsLegales from './Pages/PagesFooter/MentionsLegales'
import NousJoindre from './Pages/PagesFooter/NousJoindre'
import './App.css'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Livres' component={Livre} />
        <Route path='/Revues' component={Revue} />
        <Route path='/Mentions légales' component={MentionsLegales} />
        <Route path='/Nous joindre' component={NousJoindre} />
      </Switch>
    </div>
  )
}

export default App
