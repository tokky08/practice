// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React from 'react';
import './App.css';
import Axios from 'axios';

//function App() {
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', test: "test" };
    // this.state2 = { test: "test" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>text parser</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea name="text" cols="80" rows="4" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br/>
            <input type="submit" value="Parse" />
          </form>
        </header>
        <p>{this.state.test}</p>
      </div>
    );
  }


  wakati = text => {
    //console.log("input text >>"+text)
    Axios.post('http://127.0.0.1:5000/wakati', {
      post_text: text
    }).then(res => {
      this.setState({ test: res.data.result });
      alert(res.data.result);
    })
  };

  handleSubmit = event => {
    this.wakati(this.state.value)
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    // this.setState({ test: "test！！！！" });
  };

  
}

export default App;

