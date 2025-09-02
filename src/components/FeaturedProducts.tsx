import React from 'react';
import ProductCard from './ProductCard';

// In a real application, this data would come from an API or CMS
const products = [
	{
		id: 1,
		name: 'The Essential Crewneck',
		price: '$29.99',
		imageUrl: '/images/product-1.jpg',
	},
	{
		id: 2,
		name: 'Classic Leather Sneaker',
		price: '$99.99',
		imageUrl: '/images/product-2.jpg',
	},
	{
		id: 3,
		name: 'Minimalist Timepiece',
		price: '$299.99',
		imageUrl: '/images/product-3.jpg',
	},
	{
		id: 4,
		name: 'Canvas Utility Tote',
		price: '$69.99',
		imageUrl: '/images/product-5.jpg',
	},
];

export default function FeaturedProducts() {
	return (
		<section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
			<div className='container mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						This Season&apos;s Must-Haves
					</h2>
					<p className='mt-4 text-lg text-gray-600'>
						Discover pieces designed for your wardrobe, crafted with purpose.
					</p>
				</div>

				{/* Products Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map((product) => (
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
