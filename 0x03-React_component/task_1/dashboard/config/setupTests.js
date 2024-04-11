// config/setupTests.js

if (typeof global.TextEncoder === "undefined") {
  const { TextEncoder } = require("util");
  global.TextEncoder = TextEncoder;
}

import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
