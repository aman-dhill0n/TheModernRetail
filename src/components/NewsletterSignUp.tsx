import React from 'react';

export default function NewsletterSignUp() {
	return (
		<section className='bg-gray-800 text-white'>
			<div className='container mx-auto py-16 px-6 lg:px-8 text-center'>
				<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
					Join the Club & Get 15% Off
				</h2>
				<p className='mt-4 text-lg text-gray-300 max-w-2xl mx-auto'>
					Sign up for our newsletter to receive exclusive offers, early access
					to new collections, and style inspiration.
				</p>

				{/* Form */}
				<form className='mt-8 max-w-md mx-auto'>
					<div className='flex flex-col sm:flex-row gap-4'>
						<label htmlFor='email-address' className='sr-only'>
							Email address
						</label>
						<input
							type='email'
							name='email'
							id='email-address'
							autoComplete='email'
							required
							className='w-full px-5 py-3 border border-transparent rounded-md text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
							placeholder='Enter your email'
						/>
						<button
							type='submit'
							className='sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md'>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
