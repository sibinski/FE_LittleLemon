import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function main() {
    return (
      <div className="Main">
            <Routes>
                <Route path="/HomePage" element={<HomePage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
            </Routes>
      </div>

    );
  }

  export default main;