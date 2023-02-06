import React from 'react';
import styles from './users.module.css';
import axios from "axios";

let Users = (props: any) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response=> {
            props.setUsers(
                [
                    {
                        id: 1,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeKOvIvCR4DM345hjZsPpWCh-WISvmvM5sFalyQuU&s',
                        followed: false,
                        fullName: "Igor",
                        status: 'I am boss',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://strana.today/img/forall/u/0/36/foto-1-pozdravleniya-s-rozhdestvom-svoimi-slovami.jpg',
                        followed: true,
                        fullName: "Sasha",
                        status: 'I am teacher',
                        location: {city: 'Madrid', country: 'Spane'}
                    },
                    {
                        id: 3,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-WH5AQLiQj5kaHs7HpoVAYooOWsaJoZj1ynrETM&s ',
                        followed: false, fullName: "Dima", status: 'I am doctor', location: {city: 'Rome', country: 'Italy'}
                    },
                ]
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