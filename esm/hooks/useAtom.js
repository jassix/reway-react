import { useEffect, useState } from 'react';
export const useAtom = (atom) => {
    const [atomState, setAtomState] = useState(atom.get());
    useEffect(() => {
        atom.on('data', (state) => {
            setAtomState(state);
        });
    }, []);
    if (typeof atomState == 'object') {
        return {
            ...atomState
        };
    }
    else {
        return atomState;
    }
};
//# sourceMappingURL=useAtom.js.map