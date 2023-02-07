import React from 'react';
import styles from './users.module.css';
import axios from "axios";

let Users = (props: any) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response=> {
            props.setUsers(

            )
        })

    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoUrl} className={styles.usersPhoto}/>
    </div>

    <div>
        {u.followed ?
            <button onClick={() => {
                props.unfollow(u.id)
            }}> unFollow</button> :
            <button onClick={() => {
                props.follow(u.id)
            }}> Follow</button>}
        <button> Follow</button>
    </div>
</span>
                    <span>
                        <span>
                            <div>
                                {u.fullName}
                            </div>
                            <div> {u.status}</div>
                        </span>

                        <span>
                            <div> {u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
};

export default Users;