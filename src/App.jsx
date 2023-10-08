// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

function fn() {
  getLoginQrCKey()
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
}
function App() {
  return (
    <div>
      <h1>gagiihod</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
    </div>
  );
}

export default App;
