import { Routes, Route, Navigation} from "react-router-dom";

import TicketList from  "./pages/TicketList";
import AddTicket from "./pages/AddTicket";
import TicketDetails from "./pages/TicketDetails";
import TicketEdit from "./pages/TicketEdit";
import Login from "./Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {

  return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route
                    path="/ticket-list"
                    element={
                        <>
                            <Navbar />
                            <TicketList />
                        </>
                    }
                />

                <Route
                    path="/add-ticket"
                    element={
                        <>
                            <Navbar />
                            <AddTicket />
                        </>
                    }
                />

                <Route
                    path="/ticket-details/:id"
                    element={
                        <>
                            <Navbar />
                            <TicketDetails />
                        </>
                    }
                />

                <Route
                  path="/ticket-edit/:id"
                  element={
                    <>
                          <Navbar />
                          <TicketEdit />
                    </>
                  }
                />
                
            </Route>

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
    </>
);
}