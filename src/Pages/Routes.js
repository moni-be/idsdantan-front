import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Livre from './LivresEtRevues/Livre'
import Revue from './LivresEtRevues/Revue'
import MentionsLegales from './PagesFooter/MentionsLegales'
import NousJoindre from './PagesFooter/NousJoindre'
import PageProdBook from './LivresEtRevues/PageProdBook'
import PageProdRevue from './LivresEtRevues/PageProdRevue'

const routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/livre' component={Livre} />
      <Route path='/revue' component={Revue} />
      <Route path='/mentions-legales' component={MentionsLegales} />
      <Route path='/nous-joindre' component={NousJoindre} />
      <Route path='/mon-livre/:bookId' component={PageProdBook} />
      <Route path='/ma-revue/:revueId' component={PageProdRevue} />
      <Route path='/livre/categorie/:categoryId' component={Livre} />
    </Switch>
  )
}

export default routes
