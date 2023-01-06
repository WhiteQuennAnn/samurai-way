import React from 'react';
import styles from './users.module.css';

const Users = (props: any) => {
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