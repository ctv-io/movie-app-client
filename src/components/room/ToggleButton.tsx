import React from 'react';

export default function ToggleButton() {
	return (
		<div className="form-control ">
			<label
				htmlFor="toggleUnanimity"
				className="label flex cursor-pointer items-start justify-start gap-2"
			>
				<span className="label-text text-white">Modo Unanimidade</span>
				<input
					type="checkbox"
					id="toggleUnanimity"
					className="toggle border-zinc-700 bg-zinc-700 checked:bg-red-500"
				/>
			</label>
		</div>
	);
}
