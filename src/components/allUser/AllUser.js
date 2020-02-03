import React, { Component } from 'react'
import axios from "axios";

export default class AllUser extends Component {
    state = {
        allUsers: [],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/users")
        .then(res => {
            console.log(res.data)


            const items = res.data.map((user) => (
                <li key={user.id}>
                    {user.login}
                </li>
            ))

            this.setState({ allUsers: items });
        })
        .catch(err => {
            console.log(err)
        })
    }

    items = this.state.allUsers.map((user) => (
        <li key={user.id}>
            {user.login}
        </li>
    ))

    render() {
        return (
            <div>
                {this.state.allUsers}
            </div>
        )
    }
}
