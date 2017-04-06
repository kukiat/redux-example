import React,{Component} from 'react';
import { add,remove } from './actions'
import { bindActionCreators } from 'redux'
class App extends Component {
  
  render() {
    return (
      <div>
        <button onClick={ ()=>this.props.add() }>click</button>
        <button onClick={ ()=>this.props.remove() }>click</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    add:add,
    remove:remove
  },dispatch)
}
export default App;
