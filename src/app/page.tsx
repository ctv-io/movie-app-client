'use client';

import GenericMainBackground from '@/components/GenericMainBackground';
import MainPageHeroSection from '@/components/MainPageHeroSection';

import SocketContext from '@/utils/contexts/SocketContext/Context';
import { useContext } from 'react';

export default function Home() {
	const { users } = useContext(SocketContext).SocketState;
	console.log(users);
	return (
		<GenericMainBackground>
			<MainPageHeroSection />
		</GenericMainBackground>
	);
}
