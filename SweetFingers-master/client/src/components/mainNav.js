import React, { Component } from 'react';
class NavbarsMain extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            text: ""
        }
        this.fetchChirps = this.fetchChirps.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    fetchChirps() {
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state.user,
                text: this.state.text,
            })
        })
            .catch(err => {
                alert("Error: Your chirp was not created");
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <div className="input">
                <form action="">
                    <input
                        type="text"
                        placeholder="UserName"
                        size="10"
                        id="user"
                        name="user"
                        onChange={this.inputHandler}
                        defaultValue={this.state.user}
                    />
                    <input
                        type="text"
                        placeholder="Type a new chirp"
                        size="60"
                        id="text"
                        name="text"
                        onChange={this.inputHandler}
                        defaultValue={this.state.text}
                    />
                    <button
                        onClick={this.fetchChirps}
                        id="submit">
                        Submit
                    </button>
                </form>
                </div>
            </div >
        )
    }
}
export default NavbarsMain
