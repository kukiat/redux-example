import React,{Component} from 'react';
import { add,remove } from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class App extends Component {
  
  componentWillMount(){
    console.log('componentWillMount')
  }
  render() {
    console.log('render')
    return (
      <div>
        
        <button onClick={ ()=>this.props.add(1) }>{ this.props.result }</button>
        
      </div>
    );
  }
}
const mapStatetoProps = (state)=>{
  console.log('mapStatetoProps')
  return {
    result:state.tick
  }
}
const mapDispatchToProps = (dispatch)=>{
  console.log('mapDispatchToProps')
  return bindActionCreators({
    add:add,
    remove:remove
  },dispatch)
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);
