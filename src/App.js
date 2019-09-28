import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fnum : 0,
      snum : 0,
      result : '',
    };
  }

  inputHandler = (event) => {
    const { fnum, snum, result } = this.state;
    if(event.target.value === "+") {
      this.setState({result : fnum + snum});
    }
    if(event.target.value === "-") {
        this.setState({result :fnum - snum});
    }
    if(event.target.value === "*") {
        this.setState({result : fnum * snum});
    }
    if(event.target.value === "/") {
        this.setState({result : fnum / snum});
    }
    if(event.target.value === "^") {
        this.setState({result : Math.pow(fnum , snum)});
    }
   
  }

  render() {
    const { fnum, snum, result } = this.state;
    return (
    <div class="center">
    <br/><br/>
    <h1>Calculator</h1>
    <hr/>
      <label>Firstnumber:</label><input type="number" placeholder="input num.."onChange={event => this.setState({ fnum: Number(event.target.value) })}></input>
      &nbsp; &nbsp;
      <label>Secondnumber:</label> <input type="number" placeholder="input numb..." onChange={event => this.setState({snum: Number(event.target.value) })}></input>
      <div>
        <br/>
          <label>Operations: </label>
          <br/><br/>
          <button value="+" onClick={event => this.inputHandler(event)}>+</button>&nbsp;&nbsp;
          <button value="-" onClick={event => this.inputHandler(event)}>-</button>&nbsp; &nbsp;
          <button value="*" onClick={event => this.inputHandler(event)}>*</button>&nbsp; &nbsp;
          <button value="/" onClick={event => this.inputHandler(event)}>/</button>&nbsp; &nbsp;
          <button value="^" onClick={event => this.inputHandler(event)}>^</button>
       <br/><br/>
       <label>result:</label> <h3>{this.state.result}</h3>
      </div>     
    </div>
    );    
  }
}
export default App;