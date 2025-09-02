import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
	{
		id: 1,
		quote:
			"The quality is outstanding. I've never owned a piece of clothing that feels this good and holds up so well. I'm a customer for life!",
		author: 'Sarah L.',
		role: 'Verified Customer',
	},
	{
		id: 2,
		quote:
			'Absolutely in love with the minimalist design and the sustainable mission of this brand. My new favorite go-to for everyday essentials.',
		author: 'Michael B.',
		role: 'Design Enthusiast',
	},
	{
		id: 3,
		quote:
			'Fast shipping and fantastic customer service. The team was incredibly helpful with my sizing questions. Highly recommend!',
		author: 'Jessica P.',
		role: 'First-Time Buyer',
	},
];

export default function Testimonials() {
	return (
		<section className='bg-gray-50 py-20 sm:py-24'>
			<div className='container mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						What Our Customers Say
					</h2>
				</div>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							quote={testimonial.quote}
							author={testimonial.author}
							role={testimonial.role}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
