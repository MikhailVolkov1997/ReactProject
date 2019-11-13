import React from "react"


class Profile extends React.Component {

    

    render() {
        
       

        return <div>
           
            <div>{!this.props.status? "no status" : this.props.status}</div>
        <div>{!this.props.profile ? null : <div>{this.props.profile.fullName} </div>}</div>
        {/* <div>Looking for a job:{this.props.profile.lookingForAJob?"yes":"no" }</div>
        <div>About Me {this.profile.aboutMe}</div> */}
        <div></div>

        </div>
    }
}


export default Profile;