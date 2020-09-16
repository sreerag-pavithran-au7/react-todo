import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
        console.log(this.state.text)
    }

    onChange = (e)=>{
        this.setState({ text: e.target.value })
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}
