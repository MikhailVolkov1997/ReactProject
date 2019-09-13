import React from "react"

class Profile extends React.Component {
    render() {
        return <div>{!this.props.profile  ? null : <div>{this.props.profile.fullName} </div>}</div>
      
    }
}


export default Profile;