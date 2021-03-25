import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// import Clock from './Clock';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent = () => {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return `Error: ${this.state.errorMessage}`;
    }
    return (
      <div>
        <Spinner msg="Please accept location request!" />
      </div>
    );
  };

  render() {
    return <div>{this.renderContent()}</div>;
    // return (
    //   <div>
    //     <Clock />
    //   </div>
    // );
  }
}

export default App;
