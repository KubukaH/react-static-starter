import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Local imports
import AboutLayout from "../../components/Layouts/aboutLayout";
import AdvisoryCouncil from "./advisoryCouncil";
import BoardMembers from "./boardMembers";
import Secretariat from "./secreteriat";

const AboutIndex = () => {
  return (
    <Routes>
      <Route element={<AboutLayout />}>
        <Route path="secretariat-and-management" element={<Secretariat />} />
        <Route path="board-members" element={<BoardMembers />} />
        <Route path="advisory-council" element={<AdvisoryCouncil />} />
      </Route>
    </Routes>
  );
}

export default AboutIndex;