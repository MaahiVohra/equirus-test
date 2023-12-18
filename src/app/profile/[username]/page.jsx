'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import users from "@/app/users.json"
import { CgProfile } from "react-icons/cg"
const Page = () => {
    const [activeTab, setActiveTab] = useState("Profile")
    const params = useParams();
    const username = decodeURIComponent(params.username)
    const selectedUser = users.filter(user => user.name === username)[0]
    return (
        <div className="profile-wrapper">
            <div className="profile-page">
                <div className="sidebar">
                    <ul>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                        <li className={activeTab === "Profile" ? "active" : ""}><CgProfile /> Profile</li>
                    </ul>
                </div>
            </div>
            <div className='profile-content'>
                <div>
                    <h3>Profile</h3>
                    <p>This information will be displayed publicly so be carefull what you share.</p>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                        <h3>Photo</h3>
                        <img src={selectedUser.img} alt={`${selectedUser.name}'s profile`} className="user-profile-photo" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Page;
