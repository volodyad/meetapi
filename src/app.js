import React, { Component } from 'react';
class App extends Component {
  componentDidMount() {
    var domain = "meet.jit.si";
    var options = {
        roomName: "JitsiMeetAPIExample",
        width: 700,
        height: 700,
        parentNode: document.querySelector('#meet')
    }
    const t = window;
    debugger;
    /*eslint-disable no-undef*/

    var api = new JitsiMeetExternalAPI(domain, options);
/*eslint-enable no-undef*/

  }
  render() {
    debugger;
    return (
      <div className="App" id='meet'>
        <p className="App-intro">
          Meet api demo
        </p>

        <div>
        
        </div>
      </div>
    );
  }
}

export default App;
