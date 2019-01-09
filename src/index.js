import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile.jsx';
import LightBox from './lightbox.jsx';
import './styles.css'

class Page extends Component{
  state={
    loadedPics: Array(20).fill().map(() => Math.round(Math.random() * 400+200)),
    selectedPic: "",
    visibleBox: false
  };
  handleRandomize = () =>{
    this.setState({loadedPics: Array(20).fill().map(() => Math.round(Math.random() * 400+200))});
  }
  handleShowLightBox = (imageUrl) =>{
    this.setState({selectedPic:imageUrl});
    this.handleVisibleLightBox();
  }
  handleVisibleLightBox = () =>{
    console.log("Something!");
    this.setState({visibleBox:!this.state.visibleBox});
  }
  render(){
    return(
      <React.Fragment>
        <div className="header">
          <a href="/"><img src={require("./logo.png")} alt="logo"/></a>
          <div className="clearfix"></div>
          <button onClick={this.handleRandomize}>Randomize</button>
        </div>
        <div className="wall">
          {this.state.loadedPics.map(pic => <Tile handle={this.handleShowLightBox}imageUrl={'https://picsum.photos/'+pic}> </Tile>)}
        </div>
        <LightBox handle={this.handleVisibleLightBox} selectedPic={this.state.selectedPic} visible={this.state.visibleBox}></LightBox>
      </React.Fragment>

    );
  }
}




ReactDOM.render(<Page></Page>,document.getElementById('root'));
