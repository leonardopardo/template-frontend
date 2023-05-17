import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import 'helpers/initFA';
import MyApp from 'MyApp/MyApp';

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <MyApp />
    </Main>
  </React.StrictMode>,
  document.getElementById('main')
);
