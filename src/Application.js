import './Application.css';
import React from 'react';
import Quotes from './quotes';

class Application extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currQuote: Quotes[Math.floor(Math.random() * Quotes.length)],
    }
  }
  generateQuote(event){
    this.setState({
      currQuote: Quotes[Math.floor(Math.random() * Quotes.length)]
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
          <button class="bigbutton" onClick={this.generateQuote.bind(this)}>New Quote</button>
        </div>
      </div>
    )
  }
}

export default Application;
