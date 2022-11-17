import React from 'react';
import s from "./profileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://mobimg.b-cdn.net/v3/fetch/10/10b532bc3da4dd2e0715ea146abd32d4.jpeg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    );
};


