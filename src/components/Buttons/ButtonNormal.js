import Button from "../Button";

class ButtonNormal extends Button {
    constructor(props) {
        super(props);
        this.state.style.backgroundColor="#ce9800";
        this.state.style.color = "#FFFFFF";
        this.state.styleChanged.backgroundColor="#FFFFFF";
        this.state.styleChanged.color = "#ce9800";
        this.state.styleChanged.borderColor = "#ce9800";
        this.state.text = "Normal Button";
    }

}

export default ButtonNormal;