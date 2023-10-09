'use client';

import MainPageHeroSection from '@/components/MainPageHeroSection';
import NavBar from '@/components/NavBar';

import SocketContext from '@/utils/contexts/SocketContext/Context';
import { useContext } from 'react';

export default function Home() {
	const { users } = useContext(SocketContext).SocketState;
	console.log(users);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-24">
			<NavBar />
			<MainPageHeroSection />
		</main>
	);
}
