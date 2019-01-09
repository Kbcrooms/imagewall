import React, {Component} from 'react';

class LightBox extends Component{
  handleShowLightBox = () =>{
    this.props.handle();
    console.log("Sometg!");

  }
  render(){
    return(
      <div onClick={this.handleShowLightBox} className="lightbox" style={{visibility:this.props.visible ? "visible":"hidden"}}>
        <img src={this.props.selectedPic}/>
      </div>
    );
  }
}

export default LightBox;
