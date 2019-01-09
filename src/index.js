import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile.jsx';
import LightBox from './lightbox.jsx';
import './styles.css'

class Page extends Component{
  state={
    loadedPics: Array(20).fill().map(() => Math.round(Math.random() * 400+200))
  };
  handleRandomize = () =>{
    this.setState({loadedPics: Array(20).fill().map(() => Math.round(Math.random() * 400+200))});
  }
  handleUpdatePic = (imageUrl) =>{
    this.lightBox.handleShowPic(imageUrl);
  }
  lightBox = <LightBox></LightBox>
  render(){
    return(
      <React.Fragment>
        <div className="header">
          <a href="/"><img src={require("./logo.png")}/></a>
          <div className="clearfix"></div>
          <button onClick={this.handleRandomize}>Randomize</button>
        </div>
        <div className="wall">
          {this.state.loadedPics.map(pic => <Tile open={this.handleUpdatePic}imageUrl={'https://picsum.photos/'+pic}> </Tile>)}
        </div>
        {this.lightBox}
      </React.Fragment>

    );
  }
}




ReactDOM.render(<Page></Page>,document.getElementById('root'));
