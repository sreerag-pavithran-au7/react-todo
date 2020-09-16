import React from 'react';
import UserItem from './userItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading })=> {
        if(loading) {
            return <Spinner />
        }else {
            return (
            <div style={userStyle}>
                {
                    users.map((u)=>(
                        <UserItem key={u.id} user={u}/>
                    ))
                }
            </div>
        );
        }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users;