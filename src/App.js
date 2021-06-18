import React from 'react';
import CustomContext from './components/CustomContext';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [
        {
          label: '👀 Menu item 1',
          callback: this.callback
        },
        {
          label: '👌 Menu item 2',
          callback: this.callback
        },
        {
          label: '😜 Menu item 3',
          callback: this.callback
        },
        {
          label: '✔ Menu item 4',
          callback: this.callback
        },
        {
          label: '💥 Menu item 5',
          callback: this.callback
        }
      ]
    }
  }

  callback() {
    alert("contextMenu 😊😊")
  }
  render() {
    return (<div>
      <h1>Hello</h1>
      <p>Implementing custom context menu in react.js</p>
      <p>Right click anywhere on the screen to see the menu defined below</p>
      <CustomContext menuList={this.state.menuList} />
    </div>
    )
  }
}

export default App;
