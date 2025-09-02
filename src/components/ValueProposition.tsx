import React from 'react';
import Image from 'next/image';

export default function ValueProposition() {
	return (
		<section className='bg-white py-20 sm:py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-center'>
					{/* Image Column */}
					<div className='relative w-full h-80 rounded-lg overflow-hidden'>
						<Image
							src='/images/value-prop-image.jpg'
							alt='A person thoughtfully considering fabric swatches'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>

					{/* Text Column */}
					<div className='flex flex-col justify-center'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Designed for Everyday Life
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							We believe in quality that lasts. Our pieces are crafted from
							sustainably sourced materials, designed to be both timeless and
							durable. From the initial sketch to the final stitch, we
							prioritize ethical production and exceptional craftsmanship.
						</p>
						<div className='mt-8'>
							<a
								href='#'
								className='inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-md'>
								Learn Our Story
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
