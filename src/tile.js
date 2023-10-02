import React, {Component} from 'react';
class Tile extends Component{

  //constructor(){
  //  super();
  //}
  
  handleOpenLightBox = () =>{
    this.props.handle(this.props.imageUrl);
  }
  render(){
    const styles = {
      backgroundImage: `url(${this.props.imageUrl})`
    }
    return(
      <div className="tile" style={styles} onClick={this.handleOpenLightBox}></div>
    );
  }
}
export default Tile;
