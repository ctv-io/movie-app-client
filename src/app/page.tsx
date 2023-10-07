import MainPageHeroSection from '@/components/MainPageHeroSection';
import NavBar from '@/components/NavBar';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-24">
			<NavBar />
			<MainPageHeroSection />
		</main>
	);
}
