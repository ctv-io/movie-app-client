import React from 'react';

export default function SessionButton({ isPlayers }: boolean) {
	if (!isPlayers) {
		return (
			<button
				type="button"
				disabled
				className="btn w-full font-light uppercase text-white hover:bg-red-500 disabled:bg-red-300 disabled:text-white"
			>
				Esperando jogadores ...
			</button>
		);
	}
	return (
		<button
			type="button"
			className="btn w-full bg-red-500 font-light uppercase text-white hover:bg-red-700 disabled:bg-red-300 disabled:text-white"
		>
			iniciar movie matcher
		</button>
	);
}
