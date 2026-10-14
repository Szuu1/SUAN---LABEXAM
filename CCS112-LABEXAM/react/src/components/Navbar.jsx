import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/Login">Drugs and Medicine Inventory System</Link>

                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/TicketList">List Ticket</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/AddTicket">Add Ticket</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/TicketDetails">Ticket Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/EditTicket">Edit Ticket</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}