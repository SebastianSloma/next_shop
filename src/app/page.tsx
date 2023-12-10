import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewOffer from '@/components/NewOffer';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<main>
			<Hero />
			<Products />
			<Testimonials />
			<NewOffer />
			<Footer />
		</main>
	);
}
