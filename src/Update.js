import React, { Component } from 'react'
export default class Update extends Component {
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

  // const getuser=()=>{
  // fetch('https://jsonplaceholder.typicode.com/users').then(result => {
  //     result.json().then(resp => {
        
  //       setList({ list: resp })
  //     })
  //   })
  // }
  // getModal = data => {
  //   this.setState({ showModal: true, dataModal: data });
  // };

  // hideModal = () => {
  //   this.setState({ showModal: false });
  // };

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
  
  update(){
  
        // e.preventDefault();
       const {id,name,email,phone,website}= this.state;
       console.log(this.state);

        fetch("https://jsonplaceholder.typicode.com/users/"+this.state.id,{
         method:"PUT",
         headers:{
           Accept:"application/json",
           'Content-type':"application/json",
         },
         body: JSON.stringify(this.state)
       }).then((resp)=>{
         resp.json().then((result)=>{
           alert("updated");

           console.log(result);
          this.setState({name:result.name,
          email:result.email,
          phone:result.phone,
          website:result.website})


         })
       })
       //this.setState({name:'',email:'',phone:'',website:''})
           }
  
  
  render () {
    
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}> */}
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
        <button onClick={()=>{this.update()}}>Update</button>
        
         
      </>
    )
  }
}
