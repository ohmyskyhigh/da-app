import React, {Component} from 'react';

class TodoItems extends Component{

  constructor(props){
    {/*在constructor函数中bind this*/}
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render(){
    const {TodoContents} = this.props
    return (
        <div onClick={this.handleButtonClick}>
          {TodoContents}
        </div>
    )
  }

  handleButtonClick(){
    const {deleteItem, ContenctIdx} = this.props
    deleteItem(ContenctIdx)
  }
}

export default TodoItems
