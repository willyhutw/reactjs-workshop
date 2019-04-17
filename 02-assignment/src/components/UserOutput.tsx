import * as React from 'react';

interface Iprops {
    username: string;
    removeHandler: any;
}

const UserOutput = (props: Iprops) => {
    return (
        <div>
            <p>
                {props.username}
                <button type="button" onClick={props.removeHandler}>Delete</button>
            </p>
        </div>
        
    );
}

export default UserOutput;