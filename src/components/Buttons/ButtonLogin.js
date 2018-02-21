import Button from "../Button";

class ButtonLogin extends Button {
    constructor(props) {
        super(props);
        this.state.style.backgroundColor="#000";
        this.state.style.color = "#EEE";
        this.state.styleChanged.backgroundColor="#EEE";
        this.state.styleChanged.color = "#000";
        this.state.styleChanged.borderColor = "#000";
        this.state.text = "Login Button";
    }
}

export default ButtonLogin;