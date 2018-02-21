import Button from "../Button";

class ButtonReturn extends Button {
    constructor(props) {
        super(props);
        this.state.style.backgroundColor="#c6c6c6";
        this.state.style.color = "#FFF";
        this.state.text = "Return Button";
    }

}

export default ButtonReturn;