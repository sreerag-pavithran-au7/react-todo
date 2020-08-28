import React, { Component } from 'react';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            this.setState({post: data})
        })
    }
    render(key) {
        return (
            <div>
              <h3>{this.state.post.title}</h3>
              <p>{this.state.post.body}</p>
              <b>USERID : {this.state.post.id}</b>
            </div>
        );
    }
}

export default SinglePost;