import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const VALID_USERNAME = "itadmin"
const VALID_PASSWORD = "helpdesk123"

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



}