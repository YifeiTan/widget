import React, {Component} from 'react';
import WidgetButton from './imgs/widgetButton.png';
import WidgetButtonChanged from './imgs/widgetButtonChanged.png';
import page from './imgs/diorTShirt.png';
import './App.css';
import './popin.css';
import Widget from "./Widget";

class Popup extends Component {

    render() {
        return (
            <div className='popup'>
                <Widget closePopup={this.props.closePopup}/>
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            src: WidgetButton,
            srcPre: WidgetButtonChanged,
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        //Widget.pushToRoot();
    }

    onMouseChanged() {
        let src = this.state.srcPre;
        let srcPre = this.state.src;
        this.setState({src: src, srcPre: srcPre});
    }

    render() {
        return (
            <div className='app'>
                <img src={page} style={{zIndex:"-1",position:"absolute",width:"100%"}} alt="page"/>
                <img src={this.state.src} onClick={this.togglePopup.bind(this)}
                     onMouseOver={this.onMouseChanged.bind(this)} onMouseLeave={this.onMouseChanged.bind(this)}
                     style={{marginLeft:"72%",marginTop:"22.1%"}}
                     alt="logo"/>
                {this.state.showPopup ?
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default App;