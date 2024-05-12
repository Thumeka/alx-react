import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
