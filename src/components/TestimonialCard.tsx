import React from 'react';

type TestimonialCardProps = {
	quote: string;
	author: string;
	role: string;
};

export default function TestimonialCard({
	quote,
	author,
	role,
}: TestimonialCardProps) {
	return (
		<figure className='bg-white p-6 rounded-lg shadow-md flex flex-col'>
			<blockquote className='text-gray-600 italic flex-grow'>
				&quot;{quote}&quot;
			</blockquote>
			<figcaption className='mt-4 pt-4 border-t border-gray-200'>
				<div className='font-semibold text-gray-900'>{author}</div>
				<div className='text-gray-500 text-sm'>{role}</div>
			</figcaption>
		</figure>
	);
}
