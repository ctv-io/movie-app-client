import React from 'react';

export default function NavBar() {
	return (
		<header>
			<nav className="fixed left-0 top-0 z-10 flex h-12 w-full items-center justify-start bg-red-500 px-8">
				<h1 className="font-semibold">TMM</h1>
			</nav>
		</header>
	);
}
