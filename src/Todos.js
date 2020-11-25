import react, {Component, Fragment} from 'react';
import './Todos.css'
import TodoItems from './TodoItems'

class Todos extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'fxx',
      list: ['do it',
             'learn it'
            ]
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
  }

  render(){
    return(
      <Fragment>
        <header>
          <label htmlFor="insertArea">输入内容</label>
          {/*以下是输入框，输入todos*/}
          <input
            id = "insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          {/*以下是提交键，提交todos*/}
          <button onClick={this.handleButtonClick}>提交</button>
        </header>
        <div>
          {this.handleDisplay()}
        </div>
      </Fragment>
    );
  }

  handleDisplay(){
    return (
      this.state.list.map(
        (item, idx) =>
        <div key={idx}>
          <TodoItems
            TodoContents={item}
            ContenctIdx={idx}
            deleteItem = {this.deleteItem}
          />
        </div>
      )
    )
  }

  handleInput(e){
    const {value} = e.target
    this.setState((prevState) =>
      (
        {inputValue: value}
      )
    )
  }

  handleButtonClick(){
    this.setState((prevState) =>
      ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      })
    )
  }

  deleteItem(idx){
    this.setState((prevState) =>
      {
        const list = [...prevState.list];
        list.splice(idx, 1);
        console.log(list)
        return {list}
      }
    )
  }
}


export default Todos;
