import React from 'react';
import NavBar from './NavBar';

export default function GenericMainBackground({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-900 p-24">
			<NavBar />
			{children}
		</main>
	);
}
