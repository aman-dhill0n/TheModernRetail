import React from 'react';
import ProductCard from './ProductCard';

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

async function getProducts() {
	try {
		const res = await fetch(
			'http://the-modern-retail.local/wp-json/wp/v2/products',
			{
				next: { revalidate: 10 },
			}
		);
		if (!res.ok) throw new Error('Failed to fetch data');
		const products: WpProduct[] = await res.json();
		return products;
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
}

export default async function FeaturedProducts() {
	const products = await getProducts();

	if (products.length === 0) {
		return (
			<section className='bg-gray-50 py-16 px-4 text-center'>
				<h2 className='text-3xl font-bold text-gray-900'>Featured Products</h2>
				<p className='mt-4 text-lg text-gray-600'>
					Could not load products at this time.
				</p>
			</section>
		);
	}

	// First, filter out products that don't have an image, THEN map the rest.
	const formattedProducts = products
		.filter((product) => product.acf.product_image) // <-- THIS IS THE NEW LINE
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
					{formattedProducts.map((product) => (
						<ProductCard
							key={product.id}
							name={product.name}
							price={product.price}
							imageUrl={product.imageUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
