import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // console.log(this.context);
    // const text = this.context === 'english'? 'Submit': 'Voorleggen';
    return (
      // <button className="ui button primary" >{text}</button>
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// static contextType = LanguageContext ==== Button.contextType = LanguageContext
// contextType is only required when we are going to access data using this.context

export default Button;
