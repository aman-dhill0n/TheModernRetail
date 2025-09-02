import FeaturedProducts from '@/components/FeaturedProducts';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<FeaturedProducts />
			<ValueProposition />
		</main>
	);
}
