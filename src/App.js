import react, {Component, Fragment} from 'react';

function App() {
  var state = {
    inputValue: '123'
  }
  return(
    <Fragment>
      <header>
        <input
          value={state.inputValue}
          onChange = handleInput
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

export default App;
