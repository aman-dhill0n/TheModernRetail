import React from 'react';

export default function Hero() {
	return (
		<section className='relative h-[600px] text-white'>
			{/* Background Image Container */}
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
				{/* Overlay */}
				<div className='absolute inset-0 bg-black opacity-50'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full text-center p-4'>
				<h1 className='text-5xl font-extrabold mb-4'>
					Effortless Style, Unmatched Comfort
				</h1>
				<p className='text-lg mb-8'>Discover our new Summer 25 Collection</p>
				<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded'>
					Shop Now
				</button>
			</div>
		</section>
	);
}
