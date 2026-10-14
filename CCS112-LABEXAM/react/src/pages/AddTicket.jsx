import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTicket(){

    const [brandName, setBrandName] = useState("");

    const [errors, setErrors] = useState({});

    return (
        <div>
            <h1> Help Desk: ADD TICKET FORM </h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Requester Name: </label> <br />

                    <input 
                        type="text"
                        value={requesterName}
                        onChange={(e) => setRequesterName(e.target.value)}
                        placeholder="Requester Name"
                    />

                    {errors.requesterName && (
                        <p style={{ color: "red" }}>
                            {errors.requesterName}
                        </p>
                    )}
                </div> 
                <br />

                <div>
                    <label>Requester Email: </label> <br />

                    <input 
                        type="text"
                        value={requesterEmail}
                        onChange={(e) => setRequesterEmail(e.target.value)}
                        placeholder="Requester Email"
                    />

                    {errors.requesterEmail && (
                        <p style={{ color: "red" }}>
                            {errors.requesterEmail}
                        </p>
                    )}
                </div> 
                <br />

                

            </form>
        </div>
    )
}