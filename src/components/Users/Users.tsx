import React from 'react';

const Users = (props: any) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img/>
    </div>

    <div>
        <button> Follow</button>
    </div>
</span>

                </div>)
            }
        </div>
    );
};

export default Users;