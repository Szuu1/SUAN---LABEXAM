import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const VALID_USERNAME = "itadmin"
const VALID_PASSWORD = "helpdesk123"

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName.trim() || !password) {
            setError("Username and password are required.");
            return;
        }

        if (
            userName === VALID_USERNAME &&
            password === VALID_PASSWORD
        ) {
            sessionStorage.setItem("isAuthenticated", "true");
            setError("");
            navigate("/Home", { replace: true });
        } else {
            setError("Invalid username or password.");
        }
    };

}