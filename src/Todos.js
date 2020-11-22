import react, {Component, Fragment} from 'react';

class Todos extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'fxx',
      list: ['do it',
             'learn it'
            ]
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
          <button onClick={this.handleButtonClick.bind(this) }>提交</button>
        </header>
        <div>
          {
            this.state.list.map(
              (item, idx) =>
              <li key={idx} onClick={this.deleteItem.bind(this, idx)}>
              {item}
              </li>
            )
          }
        </div>
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

  handleButtonClick(){
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      }
    )
  }

  deleteItem(idx){
    const todoLis = [...this.state.list];
    todoLis.splice(idx, 1)
    this.setState(
      {
        list: [todoLis]
      }
    )
  }
}


export default Todos;
