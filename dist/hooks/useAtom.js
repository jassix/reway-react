"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAtom = void 0;
const react_1 = require("react");
const useAtom = (atom) => {
    const [atomState, setAtomState] = (0, react_1.useState)(atom.get());
    (0, react_1.useEffect)(() => {
        atom.on('data', (state) => {
            setAtomState(state);
        });
    }, []);
    if (typeof atomState == 'object') {
        return Object.assign({}, atomState);
    }
    else {
        return atomState;
    }
};
exports.useAtom = useAtom;
//# sourceMappingURL=useAtom.js.map