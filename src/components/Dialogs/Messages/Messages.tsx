import React from 'react';

export type PropsType = {
    message: string
}

export const Messages = (props: PropsType) => {
    return (
        <div>
            {props.message}
        </div>
    );
};