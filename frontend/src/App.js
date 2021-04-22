import './App.css'
import React from "react";
import Map from './components/Map.jsx'
import TableContainer from './components/TableContainer.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraData: []
    }
  }

  componentDidMount() {
    this.downloadCameraData();
  }

  downloadCameraData() {
    fetch("http://127.0.0.1:5000/api/cameras"
    ).then(r => {
      if (r.status / 100 !== 2) {
        throw Error(r.status);
      }
      return r.json();
    }).then(cameraData => {
      this.setState({ cameraData: cameraData });
    }).catch(() => {
      console.log("Could not download camera data")
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Security cameras Utrecht</h1>
        <Map data={this.state.cameraData} />
        <div id="source">
          source:
          <a href="https://data.overheid.nl/data/dataset/camera-s">https://data.overheid.nl/data/dataset/camera-s</a>
        </div>
        <main>
          <TableContainer data={this.state.cameraData} />
        </main>
      </div>
    );
  }
}

export default App;
