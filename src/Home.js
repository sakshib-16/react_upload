import './App.css'
//import { useGetPostsQuery } from './services/post'
import logo from './img_avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEdit, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
//import {useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import Update from './Update'
import React, { Component } from 'react'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    this.getuser()
  }
  getuser () {
    fetch('https://api.tvmaze.com/search/shows?q=all').then(result => {
      result.json().then(resp => {
        this.setState({ list: resp })
      })
    })
  }

  render () {
    const { list } = this.state
    console.log(list.show)

    return (
      <>
        <section
          class='cards'
          style={{
         //   width: '18rem',
            display: 'flex',
               flexWrap: 'wrap',

            justifyContent: 'space-between'
          }}
        >
          {list.map(item => (
            <div class='card' style={{
           // width: '100%'
          }}>
              <img
                className='card-img-top'
                src={item.show.image.medium}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>{item.show.name}</h5>
                <p className='card-text'>{item.show.name}</p>
                
                <Link to={{pathname: `/summary/${item.show.id}`,
                  state: {summary : item.show.summary,
                  image: item.show.image,
                  title: item.show.name}

                } }
                className='btn btn-primary'>
                 More
                  </Link>
              </div>
            </div>
          ))}
        </section>
      </>
    )
  }
}

export default Home
