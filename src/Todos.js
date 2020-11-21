import react, {Component, Fragment} from 'react';

class Todos extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'fxx',
      list: []
    }
  }

  render(){
    return(
      <Fragment>
        <header>
          <input
            value={this.state.inputValue}
            onChange={this.handleInput.bind(this)}
          />
          <button>提交</button>
        </header>
        <ul>
          <li> learn </li>
          <li> do </li>
        </ul>
      </Fragment>
    );
  }

  handleInput(e){
    this.setState(
      {
        inputValue: e.target.value
      }
    )
  }
}


export default Todos;
