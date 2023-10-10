import ISessionMenu from '@/interfaces/ISessionMenu';
import React from 'react';
import { FiXCircle } from 'react-icons/fi';

export default function SessionMenu({ players }: ISessionMenu) {
	if (!players || players.length === 0) {
		return (
			<div className="menu rounded-box flex w-full grow items-center justify-center border border-zinc-700 bg-zinc-900">
				<span>Sem Jogadores Conectados</span>
			</div>
		);
	}
	return (
		<div className=" rounded-box flex w-full grow items-center justify-center border border-zinc-700 bg-zinc-900">
			<ul className="h-full w-full justify-between">
				{players.map((item) => (
					<div className="flex items-center justify-between overflow-auto border-b border-zinc-700 p-2 ">
						<li className="" key={item}>
							{item}
						</li>

						<FiXCircle />
					</div>
				))}
			</ul>
		</div>
	);
}
