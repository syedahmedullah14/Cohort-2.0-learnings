import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react"


export function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">

    <div className="flex flex-col justify-center">

        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

        <Heading label={"Sign In"}/>
        <SubHeading label={"Enter your credentials to access your account"}/>
        <InputBox onChange={e=>{
                setUsername(e.target.value)
            }} placeholder={"jaser@gmail.com"} label={"Email"}/>

        <InputBox onChange={e=>{
                setUsername(e.target.value)
            }} placeholder={""} label={"Password"}/>
        <div className="pt-4">

        <Button onClick={async()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                });
                localStorage.getItem("token", response.data.token)
                navigate("/dashboard")
            }} label={"Sign In"}/>

        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>

        </div>
    </div>
   
</div>
}