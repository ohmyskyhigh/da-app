import react, {Component, Fragment} from 'react';
import './Todos.css'

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
          <label htmlFor="insertArea">输入内容</label>
          {/*以下是输入框，输入todos*/}
          <input
            id = "insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInput.bind(this)}
          />
          {/*以下是提交键，提交todos*/}
          <button onClick={this.handleButtonClick.bind(this) }>提交</button>
        </header>
        <div>
          {/*以下是显示，显示todos*/}
          {
            this.state.list.map(
              (item, idx) =>
              <li
              key={idx}
              onClick={this.deleteItem.bind(this, idx)}
              dangerouslySetInnerHTML={{__html: item}}>
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
        list: todoLis
      }
    )
  }
}


export default Todos;
