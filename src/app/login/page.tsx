"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [disableBtn, setDisableBtn] = useState(true);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setDisableBtn(false);
        } else {
            setDisableBtn(true);
        }
    }, [user])

    const signInHandler = async () => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log(response);
            router.push("/profiles");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {loading && <Loader />}
            <form className="flex flex-col items-center justify-center py-2 border border-white p-4">
                <div className="flex flex-col p-2">
                    <label htmlFor="email">Email</label>
                    <input className="text-black" type="email" id="email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="flex flex-col p-2">
                    <label htmlFor="password">Password</label>
                    <input className="text-black" type="password" id="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <button type="submit" disabled={disableBtn} onClick={signInHandler} className=" bg-blue-500 p-1 rounded" >Login</button>
            </form>
            <Link href="/signup">Do not any have account? SignUp here</Link>
        </div>
    );
};

export default Login;