'use client';

import React, { useRef } from 'react';

// Interfaces
import IToggleButton from '@/interfaces/IToggleButton';

export default function ToggleButton({ unanimityMode }: IToggleButton) {
	const unanimity = useRef(unanimityMode);

	function handleToggle() {
		unanimity.current = !unanimity.current;
		console.log(unanimity.current);
		// TODO add here logic to set the toggle value in the api to unanimity.current in the future in order to not have to make the whole thing client side XDDDDD
	}

	return (
		<div className="form-control ">
			<label
				htmlFor="toggleUnanimity"
				className="label flex cursor-pointer items-start justify-start gap-2"
			>
				<span className="label-text text-zinc-200">Modo Unanimidade</span>
				<input
					type="checkbox"
					id="toggleUnanimity"
					className="toggle border-zinc-700 bg-zinc-700 checked:bg-red-500"
					onChange={handleToggle}
				/>
			</label>
		</div>
	);
}
