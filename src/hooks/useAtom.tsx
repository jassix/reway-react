import {useEffect, useState} from 'react';
import {Atom} from "@reway/core";

export const useAtom = <InitialState,>(atom: Atom<InitialState>) => {
	const [atomState, setAtomState] = useState<InitialState>(atom.get() as InitialState);

	useEffect(() => {
		let index = "";

		atom.on('data' as any, (state, ctx) => {
			index = ctx as string;
			setAtomState(state);
		})

		return () => {
			atom.unmount(index);
		}
	}, [])

	if (typeof atomState == 'object') {
		return {
			...atomState
		}
	} else {
		return atomState
	}
}