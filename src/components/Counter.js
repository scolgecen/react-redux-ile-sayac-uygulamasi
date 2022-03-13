import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className='container'>
        <h1 style={{border:'1px solid #ddd',width:'100px',padding:'25px',backgroundColor:'black',color:'white',borderRadius:'5px',marginTop:'50px'}}>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {counter:state.counterReducer}
}
export default connect(mapStateToProps)(Counter);