'use client'
import Image from 'next/image'
import "./Search.css"
import { useState } from 'react'
import UserCard from './UserCard'
import { IoSearchOutline } from "react-icons/io5";
export default function Search() {
    const [inputValue, setInputValue] = useState()
    const [selectedUser, setSelectedUser] = useState()
    const users = [
        {
            name: "Tom Cook",
            phone: "640-390-4790",
            url: "https://tomcook.com",
            role: "CEO",
            email: "tomcook@gmail.com",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
        },
        {
            name: "Alice Johnson",
            phone: "555-123-4567",
            url: "https://alicejohnson.com",
            role: "CTO",
            email: "alice.johnson@email.com",
            img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
        },
        {
            name: "David Smith",
            phone: "789-234-5678",
            url: "https://davidsmith.net",
            role: "CFO",
            email: "david.smith@email.com",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
        },
        {
            name: "Sarah Miller",
            phone: "321-987-6543",
            url: "https://sarahmiller.org",
            role: "Marketing Director",
            email: "sarah.miller@email.com",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
        }
    ]
    return (
        <div className="search-wrapper">
            <div className='search'>
                <div></div>
                <input type="text" placeholder='Search' value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
                <div className='search-content'>
                    <div className='search-recent'>
                        {!inputValue && <div>Recent Searches</div>}
                        {users.filter(user => {
                            if (inputValue && inputValue.trim() !== "") {
                                return user.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
                            }
                            else {
                                return user
                            }
                        }).map(user => {
                            return <div className={`${selectedUser && selectedUser.name === user.name && "activeUser "} search-item`} key={user.name} onClick={() => setSelectedUser(user)}>
                                <img src={user.img} alt={`${user.name}'s profile`} className="search-user-photo" />{user.name}
                            </div>
                        })}
                    </div>
                    <div>
                        {selectedUser && <UserCard user={selectedUser} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
