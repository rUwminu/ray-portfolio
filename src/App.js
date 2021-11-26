import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SingleProject from './pages/SingleProject'
import CV from './pages/CV'

import './App.css'
import { Navbar, Footer } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/ray-portfolio' exact={true}>
          <Home />
        </Route>
        <Route path='/ray-portfolio/project/:id'>
          <SingleProject />
        </Route>
        <Route path='/ray-portfolio/cv'>
          <CV />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
