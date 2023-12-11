import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewOffer from '@/components/NewOffer';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import './globals.css';

export default function Home() {

	
	return (
		<main >
			<Hero />
			<Products />
			<NewOffer />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
