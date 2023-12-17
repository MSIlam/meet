import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
    this.fontSize = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "16px",
      margin: "10px 0",
      padding: "10px",
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "Navy"; // blue
    this.bgColor = "LightSteelBlue"; // light blue
  }
}
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "Maroon";
    this.bgColor = "LightSteelBlue";
  }
}
class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "Maroon";
    this.bgColor = "LightSteelBlue";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
