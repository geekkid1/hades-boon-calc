import logo from './logo.svg';
import './App.css';
import React from 'react';
import SelectSearch from 'react-select-search';

class FakeUndoButton extends React.Component {
  render() {
  return (
    <div className="undo">
      <button 
        onClick={this.props.onClick} 
        className={this.props.undone ? "disabled undoButton" : "undoButton"}>
          Undo</button>
    </div>
  );
  }
}

const options = [
  {name: 'First Option', value: "fo"},
  {name: 'Second Option', value: "so"}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onUndoClick = this.onUndoClick.bind(this);
    this.state = {
      undone: false,
    };
  }

  onUndoClick() {
    this.setState({undone: true});
  }

  render() {
    const undone = this.state.undone;
    let text;
    if(undone) {
      text = <p>Edit <code>src/App.js</code> and save to reload.</p>
    } else {
      text = <p>I edited <code>src/App.js</code> successfully!</p>
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FakeUndoButton onClick={this.onUndoClick} undone={this.state.undone} />
        <SelectSearch options={options} name="test" placeholder="Select One" />
      </header>
    </div>
  );
  }
}

export default App;
