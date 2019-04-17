import * as React from 'react';

interface Iprops {
    inputHandler: any;
    createHandler: any;
}

const UserInput = (props: Iprops) => {
    return (
        <div>
            <input type="text" onChange={props.inputHandler}/>
            <button type="button" onClick={props.createHandler}>Create</button>
        </div>
    );
}

export default UserInput;