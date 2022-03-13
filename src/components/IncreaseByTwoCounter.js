import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'

 class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div className='container'>
          <button className='btn btn-sm btn-secondary' style={{border:'1px solid #ddd',width:'100px',padding:'10px',fontSize:'20px',backgroundColor:'',color:'white',borderRadius:'5px',marginTop:'10px'}} onClick={e=>{
            this.props.dispatch(increaseByTwoCounter());
          }}> 2 artır</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);