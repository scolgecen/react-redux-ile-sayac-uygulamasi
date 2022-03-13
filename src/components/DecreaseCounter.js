import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'

 class DecreaseCounter extends Component {
  render() {
    return (
      <div className='container'>
          <button className='btn btn-sm btn-info' style={{border:'1px solid #ddd',width:'100px',padding:'10px',fontSize:'20px',backgroundColor:'',color:'white',borderRadius:'5px',marginTop:'10px'}} onClick={e=>{
            this.props.dispatch(decreaseCounter());
          }}> 1 Azalt</button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);