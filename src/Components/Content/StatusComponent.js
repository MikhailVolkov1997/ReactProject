import React from 'react';

class StatusComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            active:false
        }
        this.text = "hello my friends"
        this.activateEdit = this.activateEdit.bind(this)
    }
        
   
    activateEdit ()  {
        this.setState({
            active:!this.state.active
        });
    }


    render () {
        return <div>
            {this.state.active ? <input onBlur={this.activateEdit} value={this.text} autoFocus={true}></input>
            :<div onDoubleClick ={this.activateEdit}> {this.text}</div>}
        </div>
    }
}
export default StatusComponent