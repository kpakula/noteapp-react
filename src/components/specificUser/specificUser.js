import React from 'react'

export default function specificUser(props) {
    return <h3>Requested topic ID: {props.match.params.id}</h3>;
}
