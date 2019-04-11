import React from 'react'
import { auth } from './firebaseConfig'

const Profile = () => {
    const user = auth.currentUser

    return (
        <div>
            <img
                src={user.photoURL}
                alt={user.displayName}
                style={{
                    width: '200px',
                    borderRadius: '50%'
                }}
            />
            <p>
                {user.displayName}
            </p>
            <p>
                {user.email}
            </p>
        </div>
    )
}

export default Profile