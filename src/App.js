import React,{Component} from 'react';
import { addHuman } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class App extends Component {
  constructor(){
    super()
      this.click = this.click.bind(this)
  }
  click(e){
    e.preventDefault()
    const text = this.refs.name.value
    this.props.addHuman(text)
    this.refs.clear.reset()
  }
  render() {
    return (
      <div>
        <form ref='clear'>
          <input type="text" ref='name'/>
          <button onClick={ this.click } >GO</button>
        </form>
        { this.props.data }
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  const data = state.todoReducer.map((data)=>{
      return(
        <p>{data.text}</p>
      )
    })
  return{
    data:data
  }
}
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    addHuman:addHuman
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App)