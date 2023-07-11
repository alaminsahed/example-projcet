import React from 'react';

const userProfile = ({ params }) => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1>{params.id}</h1>
        </div>
    );
};

export default userProfile;