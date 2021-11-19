import './App.css'
import { useGetPostsQuery, useDeletePostMutation } from './services/post'
import logo from './img_avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Update from './Update'
import Home from './Home'
import User from './User'
import Summary from './Summary'

function App () {
  return (
    <>
      <Router>
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
          <div class='container-fluid'>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                {/* <li class='nav-item'>
                  <a class='nav-link active' aria-current='page'>
                    Home
                  </a>
                </li> */}
                <li class='nav-item'>
                  <Link to='/home'>List</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Route path='/home'>
          <Home />
        </Route>
         <Route
          path='/summary/:id'
          render={props => <Summary text={props.match.params.name} {...props} />}
        />
        <Route
          path='/user/:id'
          render={props => <User text='Hello, ' {...props} />}
        /> 

        <Route exact path='/'>
          <Home />
        </Route>
      </Router>
    </>
  )
}

export default App
