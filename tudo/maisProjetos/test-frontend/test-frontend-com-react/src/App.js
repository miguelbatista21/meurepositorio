import React from "react";

class App extends React.Component {
  state = {
    toplevels: []
  };

  componentWillMount() {
    const resp = [
      {
        name: "Cachero",
        level: 400
      },
      {
        name: "Eternal Oblivion",
        level: 300
      },
      {
        name: "Bubble",
        level: 200
      }
    ];

    this.setState({
      toplevels: resp
    });
  }

  render() {
    const toplevels = this.state.toplevels;
    const trs = [];
    for (let i = 0; i < toplevels.length; i++) {
      const player = toplevels[i];
      trs.push(
        <tr>
          <td>{i + 1}</td>
          <td>{player.name}</td>
          <td>{player.level}</td>
        </tr>
      );
    }

    return (
      <div>
        <h1>TOP LEVEL</h1>
        <table>
          <tr>
            <td>No.</td>
            <td>Player</td>
            <td>Level</td>
          </tr>
          {trs}
        </table>
      </div>
    );
  }
}
document.write();

export default App;
