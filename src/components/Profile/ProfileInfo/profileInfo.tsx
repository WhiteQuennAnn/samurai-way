import React from 'react';
import s from "./profileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgForProfile}>
                <img src="https://vjoy.cc/wp-content/uploads/2019/05/3-60.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    );
};


