import React from 'react';
import Image from 'next/image';

// Define the type of data (props) the component accept

type ProductCardProps = {
	imageUrl: string;
	name: string;
	price: string;
};

export default function ProductCard({
	imageUrl,
	name,
	price,
}: ProductCardProps) {
	return (
		<div
			className='bg-white border border-gray-200 rounded-lg shadow-sm
        overflow-hidden group'>
			{/* Produce Image */}
			<div className='relative w-full h-64'>
				<Image
					src={imageUrl}
					alt={name}
					fill
					sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw' // Add this line
					style={{ objectFit: 'cover' }}
					className='group-hover:scale-105 transition-transform duration-300 ease-in-out'
				/>
			</div>

			{/* Product Info */}
			<div className='p-4'>
				<h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
				<p className='mt-1 text-md text-gray-600'>{price}</p>
			</div>
		</div>
	);
}
