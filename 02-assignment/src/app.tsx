import * as React from "react";

import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends React.Component {
    state = {
        inputText: "",
        users: [
            { name: "user1" },
            { name: "user2" },
        ],
    };

    inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({inputText: e.currentTarget.value});
    }

    createHandler(e: React.MouseEvent) {
        e.preventDefault();
        if (this.state.inputText.length > 0) {
            const newUsers = [...this.state.users];
            newUsers.push({
                name: this.state.inputText,
            });
            this.setState({users: newUsers});
        }
    }

    removeHandler(name: string , e: React.MouseEvent) {
        e.preventDefault();
        const newUsers = this.state.users.filter((user) => user.name !== name);
        this.setState({users: newUsers});
    }

    render() {
        const UserOutputs = this.state.users.map(user => 
            <UserOutput
                key={user.name}
                username={user.name}
                removeHandler={this.removeHandler.bind(this, user.name)}
            />
        );
        return (
            <div>
                <UserInput 
                    inputHandler={this.inputHandler.bind(this)}
                    createHandler={this.createHandler.bind(this)}
                />
                {UserOutputs}
            </div>
        );
    };
}

export default App;