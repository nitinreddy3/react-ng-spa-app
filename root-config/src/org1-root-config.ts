import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org1/react-app",
  app: () => System.import("@org1/react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
