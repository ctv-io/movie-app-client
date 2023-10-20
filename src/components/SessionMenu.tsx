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
	const isAdm: boolean = true;
	if (isAdm) {
		return (
			<div className=" rounded-box flex w-full grow items-center justify-center overflow-auto border border-zinc-700 bg-zinc-900">
				<ul className="h-full w-full justify-between">
					{players.map((item) => (
						<div
							className="flex items-center justify-between  border-b border-zinc-700 p-3"
							key={item}
						>
							<li>{item}</li>
							<FiXCircle />
						</div>
					))}
				</ul>
			</div>
		);
	}
	return (
		<div className=" rounded-box flex w-full grow items-center justify-center overflow-auto border border-zinc-700 bg-zinc-900">
			<ul className="h-full w-full justify-between">
				{players.map((item) => (
					<div
						className="flex items-center justify-between  border-b border-zinc-700 p-3"
						key={item}
					>
						<li>{item}</li>
					</div>
				))}
			</ul>
		</div>
	);
}
