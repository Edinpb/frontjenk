import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteUser extends Component{
    constructor(props){
	    super(props);

	    this.onChangeUsername = this.onChangeUsername.bind(this)
	    this.onSubmit = this.onSubmit.bind(this)
            
	    this.state = {
		    ids: [],
		    username: '',
      		      users: [],
			id: ''

	    }
    }


componentDidMount() {
    axios.get('http://backend:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),

            username: 'prazno',

            ids: response.data.map(ids => ids._id),
            id: 'prazno'

          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }




	onChangeUsername(e){
this.setState({
	username: e.target.value,


})

 const user = {
                 id: this.state.ids[2]
		 }

		 console.log("Ime usera " + user.id);
	}

         onSubmit(e){
		 e.preventDefault();
		 const user = {
                 username: this.state.id
		 }

		 console.log("Ime usera " + user.id);
        axios.delete('http://backend:5000/users/delete/'+user.username)
      .then(res => console.log(res.data));

  this.setState({
      username: ''
    })
}

  render() {
    return (
   
   <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

<div className="form-group"> 
          <input type="submit" value="Delete user" className="btn btn-primary" />
        </div>

      </form>
</div>
    )
  }
}


