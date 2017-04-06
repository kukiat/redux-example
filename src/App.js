import React, { Component } from 'react';
import { add,remove } from './actions'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
class App extends Component {
  
  render() {
    return (
      <div>
        { this.props.result }
        <button onClick={ ()=>this.props.addd(1) }>Add</button><br/><hr/>
        <button onClick={ ()=>this.props.remove(1) }>Remove</button>
      </div>
    );
  }
}

const mapStatetoProps = (state,ownProps)=>{
  console.log(state.tick)
  return{
    result:state.tick,
    
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
  return bindActionCreators({
    addd:add,
    remove:remove
  },dispatch)
}

export default connect(mapStatetoProps,mapDispatchToProps)(App);
