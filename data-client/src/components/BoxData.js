import React, { Component } from 'react';
import ListData from './ListData';
import FormData from './FormData';
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
//import { request } from '../../../data-server/app';

export default class BoxData extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
        this.addData = this.addData.bind(this)
        this.removeData = this.removeData.bind(this)
        this.resendData = this.resendData.bind(this)
    }

    componentDidMount() {
        request.get('data')
            .then(function (response) {
                const data = response.data.map( item => {
                    item.sent = true;
                    return item
                })
                this.setState({ data: data })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })

    }

    addData(string, integer, float, date, boolean) {
        const id = Date.now();
        this.setState(function (state, props) {
            return {
                data: [...state.data, { id, string, integer, float, date, boolean, sent: true}]
            };
        });
        request.post('data', { id, string, integer, float, date, boolean })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                this.setState(function (state, props) {
                    return {
                        data: state.data.map(item => {
                           if(item.id === id){
                               item.sent = false;
                           } 
                           return item;
                        })
                    };
                });
            }.bind(this))
    }

    removeData(id) {
        this.setState(function (state, props) {
            return {
                data: state.data.filter(item => item.id !== id)
            };
        });
        request.delete(`data/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    resendData(id, string, integer, float, date, boolean ){
        request.post('data', { id, string, integer, float, date, boolean })
            .then(function (response) {
                this.setState(function (state, props) {
                    return {
                        data: state.data.map(item => {
                           if(item.id === id){
                               item.sent = true;
                           } 
                           return item;
                        })
                    };
                });
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="container">
                <FormData add={this.addData} />
                <ListData data={this.state.data} remove={this.removeData} resend={this.resendData} />
            </div>
        )
    }
}