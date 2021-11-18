import React from "react";
import SeasonDisplay from "./component/SeasonDisplay";
import Spinner from "./component/Spinner";


class App extends React.Component{
  state = { lat: null, err: ""};
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({err: err.message}) 
      );
  }
  render(){
    if(this.state.err && !this.state.lat){
      return <h1>err:{this.state.err}</h1>
    }
    if(!this.state.err && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
        return(
        <div>
         <Spinner message="Please accept location request" />     
        </div>
    );
  }

}

export default App;
