import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'

 class IncreaseCounter extends Component {
  render() {
    return (
      <div className='container'>
          <button className='btn btn-sm btn-success' style={{border:'1px solid #ddd',width:'100px',padding:'10px',fontSize:'20px',backgroundColor:'',color:'white',borderRadius:'5px',marginTop:'50px'}} onClick={e=>{
            this.props.dispatch(increaseCounter());
          }}> 1 artır</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);