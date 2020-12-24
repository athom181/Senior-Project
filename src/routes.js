
import Info from "./pages/info.js";
import SampleBill from "./pages/sampleBill.js";
import Home from "./pages/home.js";


var indexRoutes = [
  { path: "/info", name: "Info", component: Info },
  { path: "/sample", name: "Sample Bill", component: SampleBill },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
