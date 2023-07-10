"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: ""
    })



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form className="flex flex-col items-center justify-center py-2 border border-white p-4">
                <div className="flex flex-col p-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={users.username} onChange={(e) => setUsers({ ...users, username: e.target.value })} />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={users.email} onChange={(e) => setUsers({ ...users, email: e.target.value })} />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={users.password} onChange={(e) => setUsers({ ...users, password: e.target.value })} />
                </div>
                <button type="submit" onclick={() => { }} className="bg-blue-500 p-1 rounded">Sign Up</button>
            </form>
            <Link href="/login">Already have account? Login here</Link>
        </div>
    );
};

export default Signup;