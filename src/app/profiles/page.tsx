"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { set } from 'mongoose';
import Link from 'next/link';

const UserProfile = () => {
    const router = useRouter();
    const [user, setUser] = useState([]);

    const logOutHandler = async () => {
        try {
            const res = await axios.get("/api/users/logout");
            toast.success("Logged out successfully");
            router.push("/login");
        } catch (error) {
            toast.error(error.response.data.message);
            router.push("/login");
        }
    }

    const getUser = async () => {
        try {
            const res = await axios.get("/api/users/profile");
            setUser(res.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        getUser();
    }, [user])

    return (
        <div className="min-h-screen p-5">
            <div>
                <button onClick={logOutHandler} className="border border-white p-3 rounded">LogOut</button>
            </div>
            <h1>hello profile</h1>
            <div className="flex flex-col items-center justify-center">
                {
                    user.map((item, index) => {
                        return (
                            <div key={item._id} className="border border-white p-4 mb-5">
                                <h1>Email: {item.email}</h1>
                                <Link href={`/profiles/${item._id}`} className="bg-green-600 p-1 rounded cursor-pointer">Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default UserProfile;