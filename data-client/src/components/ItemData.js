import React from 'react';

export default function ItemData(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.string}</td>
            <td>{props.integer}</td>
            <td>{props.float}</td>
            <td>{props.date}</td>
            <td>{props.boolean}</td>
            <td>
                <button type="button" className="btn btn-success" >Edit</button>
                <button type="button" className="btn btn-danger" onClick={props.sent ? props.remove: props.resend}>{props.sent ? 'Delete': 'Resend'}</button>
            </td>
        </tr>
    );

}