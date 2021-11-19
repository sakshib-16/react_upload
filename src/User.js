import React, { Component } from 'react'
import logo from './img_avatar.png'

export default class User extends Component {
  constructor () {
    super()
     this.state = {
       name: '',
      email: '',
       phone:'',
      website:'',
      showModal: false,
    
      dataModal: {
      name: ""
     }
     }
  }

//   const getuser=()=>{
//   fetch('https://jsonplaceholder.typicode.com/users').then(result => {
//       result.json().then(resp => {
        
//         setList({ list: resp })
//       })
//     })
//   }
//   getModal = data => {
//     this.setState({ showModal: true, dataModal: data });
//   };

//   hideModal = () => {
//     this.setState({ showModal: false });
//   };

   componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id).
       then((resp) => {
          resp.json().then((result) => {
        console.log(result);
        this.setState({
          id:result.id,
          name:result.name, 
          
          email:result.email,
          phone:result.phone,
          website:result.website
          
          
          })
      })
    })
  }
  
 
  
  render () {
    
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}> */}
        <div>
        <img src={logo} alt='logo' style={{ width: '50%' }} />
        </div>
        <input
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
          value={this.state.name}
        />
        <br />
        <br />
    

        <input
          onChange={(e)=> {
            this.setState({ email: e.target.value })
          }}
          value={this.state.email}
          placeholder='Email'
        />
        <br />
        <br />
        <input
          onChange={(e)=> {
            this.setState({ phone: e.target.value })
          }}
          value={this.state.phone}
          placeholder='Phone'
        />
        <br />
        <br />
        <input
          onChange={(e)=> {
            this.setState({ website: e.target.value })
          }}
          value={this.state.website}
          placeholder='site'
        />
        <br />
        <br />
        
         
      </>
    )
  }
}
