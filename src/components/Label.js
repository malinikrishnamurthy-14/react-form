import React from 'react';

class Label extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            labelName: props.labelName
        }
    }
    render(){
        return(
            <label className="label">{this.state.labelName}</label>
        );
    }
}

export default Label;