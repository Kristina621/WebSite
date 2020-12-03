import React, { useState } from 'react';
import { Alert } from 'reactstrap';
export default (props) => {
    const [visible, setVisible] = useState(props.visible);
  
    const onDismiss = () => setVisible(false);
  
    return (
      <div>
        <Alert color="danger" isOpen={visible} toggle={onDismiss} >
          {props.message}
        </Alert>
        </div>
    );
  }