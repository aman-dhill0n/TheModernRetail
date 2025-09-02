import FeaturedProducts from '@/components/FeaturedProducts';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Testimonials from '@/components/Testimonials';
import NewsletterSignUp from '@/components/NewsletterSignUp';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<FeaturedProducts />
			<ValueProposition />
			<Testimonials />
			<NewsletterSignUp />
			<Footer />
		</main>
	);
}
