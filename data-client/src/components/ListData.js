import React from 'react';
import ItemData from './ItemData';

export default function ListData(props) {
    const listNode = props.data.map(item => < ItemData key={item.id} id={item.id} string={item.string} integer={item.integer} float={item.float} date={item.date} boolean={item.boolean} sent={item.sent} remove={() => { props.remove(item.id) }} resend={() => { props.resend(item.id, item.string, item.integer, item.float, item.date, item.boolean) }} />)
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <td>String</td>
                    <td>Integer</td>
                    <td>Float</td>
                    <td>Date</td>
                    <td>Boolean</td>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listNode}
            </tbody>
        </table>
    )
}