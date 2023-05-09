import {useEffect, useState} from 'react';
import {Atom} from "@reway/core";

export const useAtom = <InitialState,>(atom: Atom<InitialState>) => {
	const [atomState, setAtomState] = useState<InitialState>(atom.get() as InitialState);

	useEffect(() => {
		atom.on('data' as any, (state) => {
			setAtomState(state);
		})
	}, [])

	if (typeof atomState == 'object') {
		return {
			...atomState
		}
	} else {
		return atomState
	}
}