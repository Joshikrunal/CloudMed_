import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home              from "./pages/Home";
import FamilyMedicine    from "./pages/FamilyMedicine/FamilyMedicine";
import Cardiology        from "./pages/Cardiology/Cardiology";
import Surgery           from "./pages/Surgery/Surgery";
import Dermatology       from "./pages/Dermatology/Dermatology";
import Gynecology        from "./pages/Gynecology/Gynecology";
import Nutrition         from "./pages/Nutrition/Nutrition";
import Psychology        from "./pages/Psychology/Psychology";
import Nursing           from "./pages/Nursing/Nursing";
import LabTesting        from "./pages/LabTesting/LabTesting";
import EstheticMedicine  from "./pages/EstheticMedicine/EstheticMedicine";
import VivierSkincare    from "./pages/VivierSkincare/VivierSkincare";
import XerfRF            from "./pages/XerfRF/XerfRF";
import VenusVersa        from "./pages/VenusVersa/VenusVersa";
import CosmeticInjections from "./pages/CosmeticInjections/CosmeticInjections";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                                    element={<Home />} />
        <Route path="/services/family-medicine"            element={<FamilyMedicine />} />
        <Route path="/services/cardiology"                 element={<Cardiology />} />
        <Route path="/services/dermatology"                element={<Dermatology />} />
        <Route path="/services/gynecology"                 element={<Gynecology />} />
        <Route path="/services/surgery"                    element={<Surgery />} />
        <Route path="/services/esthetic"                   element={<EstheticMedicine />} />
        <Route path="/services/esthetic/vivier-skincare"   element={<VivierSkincare />} />
        <Route path="/services/esthetic/xerf-rf"           element={<XerfRF />} />
        <Route path="/services/esthetic/venus-versa"       element={<VenusVersa />} />
        <Route path="/services/esthetic/cosmetic-injections" element={<CosmeticInjections />} />
        <Route path="/services/nutrition"                  element={<Nutrition />} />
        <Route path="/services/psychology"                 element={<Psychology />} />
        <Route path="/services/testing"                    element={<LabTesting />} />
        <Route path="/services/nursing"                    element={<Nursing />} />
      </Routes>
    </BrowserRouter>
  );
}
