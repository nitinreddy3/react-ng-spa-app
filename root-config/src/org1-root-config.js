import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@org1/react-app2",
  app: () => System.import("@org1/react-app2"),
  activeWhen: ["/react"]
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"]
});


// applications.forEach(registerApplication);
// layoutEngine.activate();
start();
