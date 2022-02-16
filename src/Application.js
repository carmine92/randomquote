import './Application.css';
import React from 'react';
import {getQuote} from './quotes';

class Application extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currQuote: getQuote(),
    }
  }

  changeQuote(event){
    this.setState({
      currQuote: getQuote()
    });
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
            <p class="quote">
              {this.state.currQuote.quote}
            </p>
            <span class="quote-author">
              {this.state.currQuote.author}
            </span>
          <button class="bigbutton" onClick={this.changeQuote.bind(this)}>New Quote</button>
        </div>
      </div>
    )
  }
}

export default Application;
