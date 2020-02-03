import React, { Component } from 'react'
import axios from "axios";
import usersURL from "./../../Api/api.js"

export default class AllUser extends Component {
    state = {
        allUsers: [],
    };

    componentDidMount() {
        axios.get(usersURL).then(res => {
            console.log(res.data)
            this.setState({ allUsers: res.data });
        })
    }

    render() {
        return (
            <div>
                jjjjj
            </div>
        )
    }
}
