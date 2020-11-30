import React, { Component } from 'react';

export default class FormData extends Component {
    constructor(props) {
        super(props);
        this.state = { string: '', integer: '', float: '', date: '', boolean: '' };
        this.handleChangeString = this.handleChangeString.bind(this);
        this.handleChangeInteger = this.handleChangeInteger.bind(this);
        this.handleChangeFloat = this.handleChangeFloat.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeBoolean = this.handleChangeBoolean.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeString(event) {
        this.setState({ string: event.target.value });
    }
    handleChangeInteger(event) {
        this.setState({ integer: event.target.value });
    }
    handleChangeFloat(event) {
        this.setState({ float: event.target.value });
    }
    handleChangeDate(event) {
        this.setState({ date: event.target.value });
    }
    handleChangeBoolean(event) {
        this.setState({ boolean: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.string, this.state.integer, this.state.float, this.state.date, this.state.boolean);
        this.setState({ string: '', integer: '', float: '', date: '', boolean: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Data</h1>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">String</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.string} onChange={this.handleChangeString} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Integer</label>
                    <div className="col-sm-10">
                        <input type="Number" className="form-control" value={this.state.integer} onChange={this.handleChangeInteger} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Float</label>
                    <div className="col-sm-10">
                        <input type="Number" className="form-control" value={this.state.float} onChange={this.handleChangeFloat} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" value={this.state.date} onChange={this.handleChangeDate} />
                  </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">  Boolean </label>
                <div className="col-sm-10">
                    <select className="form-control" value={this.state.boolean} onChange={this.handleChangeBoolean}>
                        <option type="boolean" value="">Choose the boolean ...</option>
                        <option type="boolean" value="true">True</option>
                        <option type="boolean" value="false">False</option>
                        </select>
                        </div>
                </div>
                <div className="form-group row">
                <input className="btn btn-primary" type="submit" value="Save" />
                </div>
            </form >
        );
    }
}