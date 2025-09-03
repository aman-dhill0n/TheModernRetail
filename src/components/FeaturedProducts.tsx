import React from 'react';
import ProductCard from './ProductCard';

// Type definition for the raw data from WordPress
type WpProduct = {
	id: number;
	title: {
		rendered: string;
	};
	acf: {
		price: string;
		product_image: string;
	};
};

// Async function to fetch data from the CMS
async function getProducts() {
	// Make sure your LocalWP site URL is correct here!
	const API_URL = 'http://the-modern-retail.local/wp-json/wp/v2/products';

	try {
		const res = await fetch(API_URL, {
			next: { revalidate: 10 }, // Use caching for performance
		});

		if (!res.ok) {
			// If the response is not OK, throw an error to be caught below
			throw new Error(`Failed to fetch data: ${res.statusText}`);
		}

		const products: WpProduct[] = await res.json();
		return products;
	} catch (error) {
		// If ANY error occurs during the fetch, log it to the server terminal
		console.error('Error fetching products:', error);
		// And return an empty array so the page doesn't crash
		return [];
	}
}

// The main component is async, allowing us to 'await' the data
export default async function FeaturedProducts() {
	const products = await getProducts();

	// If fetching failed or there are no products, show a helpful message
	if (!products || products.length === 0) {
		return (
			<section className='bg-gray-50 py-16 px-4 text-center'>
				<h2 className='text-3xl font-bold text-gray-900'>
					This Seasons Must-Haves
				</h2>
				<p className='mt-4 text-lg text-gray-600'>
					Could not load products at this time. Please check the connection to
					the CMS.
				</p>
			</section>
		);
	}

	// Defensively filter out any products that might be missing an image
	const formattedProducts = products
		.filter((product) => product.acf && product.acf.product_image)
		.map((product) => ({
			id: product.id,
			name: product.title.rendered,
			price: product.acf.price,
			imageUrl: product.acf.product_image,
		}));

	return (
		<section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						This Seasons Must-Haves
					</h2>
					<p className='mt-4 text-lg text-gray-600'>
						Discover pieces designed for your wardrobe, crafted with purpose.
					</p>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{formattedProducts.map((product, index) => (
						<ProductCard
							key={product.id}
							name={product.name}
							price={product.price}
							imageUrl={product.imageUrl}
							priority={index === 0}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
