import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    console.log('clicked')
  }
}

TodoItems.propTypes = {
  TodoContents: PropTypes.string,
  deleteItem: PropTypes.func,
  ContenctIdx: PropTypes.number
}


export default TodoItems
