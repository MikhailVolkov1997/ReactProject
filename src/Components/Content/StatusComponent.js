import React from 'react';

class StatusComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            active:false,
            status: this.props.status
        }
        this.defaultStatus = "please enter status"
        this.activateEdit = this.activateEdit.bind(this);
        this.console = console.log(props)
        this.updateStatusValue = React.createRef();
    }
        
   
    activateEdit = () => {
        this.setState({
            active:!this.state.active
        });
        this.props.updateStatusThunkCreate(this.state.status);
    }

    onStatusChange = (e) => {
      
       let value = e.currentTarget.value;
       this.setState({
           status:value
       })
       
    }
    

    render () {
        return <div>
            {console.log(this.props)}
            {this.state.active ? <input 
            onBlur={this.activateEdit} 
            placeholder='please enter to status' 
            autoFocus={true} 
            onChange = {this.onStatusChange}
            value={this.state.status}></input>
            :<div onDoubleClick = {this.activateEdit}>{this.state.status || this.defaultStatus }</div>}
        </div>
    }
}
export default StatusComponent