import { Component } from 'react';
import { Alert } from 'reactstrap';
export default class Alertt extends Component {
  constructor(props) {
    super(props)
    // this.state={visible: this.props.visible}
  }

  render() {
    return (
      <div>
        <Alert color="danger" isOpen={this.props.visible} toggle={this.props.callBack} >
          {this.props.message}
        </Alert>
      </div>
    );
  }
}