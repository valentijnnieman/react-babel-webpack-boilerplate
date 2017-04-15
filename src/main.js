import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

const Boilerplate = () => {
  return <div>
      <h1>Boilerplate React!</h1>
    </div>
};

ReactDOM.render(
  <Boilerplate />
  document.getElementById('root')
)
