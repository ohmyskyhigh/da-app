import react, {Component, Fragment} from 'react';
import './Todos.css'
import axios from 'axios';
import TodoItems from './TodoItems'

class Todos extends Component{
  //生命周期函数：在组件创建的时候就会被启动
  constructor(props){
    super(props);
    this.state = {
      inputValue: 'fxx',
      list: [
            ]
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.handleDisplay = this.handleDisplay.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  //生命周期函数：在组件即将被挂载到页面上的时候自动启动
  //componentWillMount

  componentDidMount(){
    axios.get('/api/todos')
         .then((res)=>{
            const data = res.data;
            this.setState(()=>{
              console.log(data);
              return {list: res.data}
            })
          })
         .catch(()=>{alert('error')});
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

  //生命周期函数：当组件被挂载到页面之后会被执行
  //componentDidMount

  handleDisplay(){
    return(this.state.list.map((item, idx) =>
        <div key={idx}>
          <TodoItems
            TodoContents={item}
            ContenctIdx={idx}
            deleteItem = {this.deleteItem}
          />
        </div>
      )
    );
  }

  handleInput(e){
    const {value} = e.target;
    this.setState((prevState) =>
        {return {inputValue: value}}
    );
  }

  handleButtonClick(){
    this.setState((prevState) =>{
        return {list: [...prevState.list, prevState.inputValue],
                inputValue: ''}
        }
    );
  }

  deleteItem(idx){
    this.setState((prevState) =>
      {
        const list = [...prevState.list];
        list.splice(idx, 1);
        console.log(list)
        return {list}
      }
    );
  }
}


export default Todos;
