import {func4} from './index4.js';
import {rand} from "./utils.js";

export const func3 = () => {
    console.log('func3 '+rand());
    func4();
};

export default func3;
