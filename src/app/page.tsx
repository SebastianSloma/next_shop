import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewOffer from '@/components/NewOffer';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import './globals.css';

export default function Home() {
	// const bg = {
	// 	backgroundImage: `url(${backgroundImage})`,
	// 	backgroundPosition: 'center',
	// 	backgroundSize: 'cover',
	// 	backgroundRepeat: 'no-repeat',
	// 	width: '100vw',
	// 	height: '100vh',
	// 	z-index: 10,
	// };

	return (
		<main>
			<Hero />
			<Products />
			<NewOffer />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
