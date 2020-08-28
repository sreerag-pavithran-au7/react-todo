import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }
    
    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=> res.json())
        .then((data)=> console.log(data))
    }

    render() {
        return (
            <div>
                <h1>ADD POST</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" name="title" placeholder="Title"
                        onChange={this.onChange}
                         value={this.state.title}/><br/>
                        <input type="text" name="body" placeholder="Body" 
                        onChange={this.onChange}
                        value={this.state.body}/><br/>
                        <button type="submit"> Post </button>
                    </div>
                </form>
               
            </div>
        );
    }
}

export default Posts;