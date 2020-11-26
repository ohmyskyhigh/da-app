import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItems extends Component{

  constructor(props){
    {/*在constructor函数中bind this*/}
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps.TodoContents)
    if(nextProps.TodoContents !== this.props.TodoContents){
      console.log('child got content')
      return true
    }
    else{
      return false;
    }
  }

  render(){
    console.log('child rander')
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
    console.log('clicked')
  }
}

TodoItems.propTypes = {
  TodoContents: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  ContenctIdx: PropTypes.number
}


export default TodoItems
