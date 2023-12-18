'use client'
import React from 'react';
import "./UserCard.css"
import Link from 'next/link';
const UserCard = ({ user }) => {
    console.log(user.email)
    return (
        <div className="user-profile-card">
            <div className='user-profile'>
                <img src={user.img} alt={`${user.name}'s profile`} className="user-profile-photo" />
                <h3>{user.name}</h3>
                <p>{user.role}</p>
            </div>
            <div className="user-details">
                <p><strong>Phone</strong> </p>
                <p>{user.phone}</p>
                <p><strong>URL</strong> </p>
                <p><a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a></p>
                <p><strong>Email</strong></p>
                <p> <a href={`mailto:${user.email}`}>{user.email}</a></p>
            </div>
            <Link href={`/profile/${user.name}`} className='button'>View Profile</Link>
        </div>
    );
};

export default UserCard;
