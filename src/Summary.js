import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
export default class Summary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      summary: '',
      show:"false"
    }
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  componentDidMount () {
    fetch(
      'https://api.tvmaze.com/search/shows?q=all' + this.props.match.params.id
    ).then(resp => {
      resp.json().then(result => {
        console.log('result', result)
        this.setState({
          // id:result.id,
          // summary:resp
        })
      })
    })
  }

  update () {
    alert('clicjed')
    // e.preventDefault();
    const { id, summary } = this.state
    console.log(this.state)

    fetch('http://localhost:3002/restaurant/' + this.state.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(resp => {
      resp.json().then(result => {
        alert('updated')
        console.log(result)
      })
    })
    this.setState({ name: '' })
  }

  render () {
    // console.log(summary)

    console.log(this.props)
    //console.log(this.props.match.params.id)
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}>

        <img
          className='card-img-top'
          src={this.props.location.state.image.medium}
          alt='Card image cap'
        />
        <div>{this.props.location.state.summary}</div>
        <br />
        <br /> */}

        <div class='card' style={{
              
              display: 'flex',
               flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
          <h5 class='card-header'>Featured</h5>
          <div class='card-body' style={{width: '50rem'}}>
            <img
              className='card-img-top'
              src={this.props.location.state.image.medium}
              alt='Card image cap'
              style={{width:'50%'}}
            />
            </div>
            <div class="card-body" style={{width: '50rem'}}>
            <h5 class='card-title'>{this.props.location.state.title}</h5>
            <p class='card-text'> {this.props.location.state.summary}</p>
            
            <button
              onClick={() => {
                this.handleModal()
              }}
              class='btn btn-primary'
            >
              Book
            </button>
          </div>
        </div>

        <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>{this.props.location.state.title}</Modal.Header>  
          <Modal.Body>{this.props.location.state.summary}</Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal>  
      </>
    )
  }
}
