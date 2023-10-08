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
    <Button type="primary" onClick={fn}>
      按钮
    </Button>
  );
}

export default App;
