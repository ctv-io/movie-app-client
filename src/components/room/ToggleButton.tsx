'use client';

import React, { useRef } from 'react';

// Interfaces
import IToggleButton from '@/interfaces/IToggleButton';
import { FiInfo } from 'react-icons/fi';

export default function ToggleButton({ unanimityMode }: IToggleButton) {
	const unanimity = useRef(unanimityMode);

	function handleToggle() {
		unanimity.current = !unanimity.current;
		console.log(unanimity.current);
		// TODO add here logic to set the toggle value in the api to unanimity.current in the future in order to not have to make the whole thing client side XDDDDD
	}

	return (
		<div className="form-control flex h-8 flex-row items-center justify-center">
			<label
				htmlFor="toggleUnanimity"
				className="label flex  cursor-pointer items-center justify-center gap-2"
			>
				<span className="label-text text-zinc-200">Modo Unanimidade</span>
				<input
					type="checkbox"
					id="toggleUnanimity"
					className="toggle border-zinc-700 bg-zinc-700 checked:bg-red-500"
					onChange={handleToggle}
				/>
			</label>
			<div
				className="tooltip tooltip-right"
				data-tip="O Modo Unanimidade faz com que o filme escolhido precise, obrigatoriamente, ser aceito por todos os jogadores da sala."
			>
				<FiInfo size="1.2em" />
			</div>
		</div>
	);
}
