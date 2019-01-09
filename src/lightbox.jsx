import React, {Component} from 'react';

class LightBox extends Component{
  state={
    selectedPic: "",
    visible: false
  };
  handleShowPic = (picture) =>{
    this.setState({selectedPic:picture});
    console.log(picture);
    this.handleVisibility();
  }
  handleVisibility = () =>{
    this.setState({visible:!this.state.visible});
  }
  render(){
    return(
      <div className="lightbox" onClick={this.handleVisibility} style={{visible: this.state.visible}}>
        <img src={this.state.selectedPic}/>
      </div>
    );
  }
}

export default LightBox;
