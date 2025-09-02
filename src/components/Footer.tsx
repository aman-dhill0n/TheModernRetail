import React from 'react';

export default function Footer() {
	return (
		<footer className='bg-white border-t border-gray-200'>
			<div className='container mx-auto py-12 px-6 lg:px-8'>
				{/* Top section with link columns */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					{/* Column 1: Shop */}
					<div>
						<h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>
							Shop
						</h3>
						<ul className='mt-4 space-y-4'>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									New Arrivals
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Collections
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Sale
								</a>
							</li>
						</ul>
					</div>

					{/* Column 2: About */}
					<div>
						<h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>
							About
						</h3>
						<ul className='mt-4 space-y-4'>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Our Story
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Sustainability
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Careers
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Support */}
					<div>
						<h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>
							Support
						</h3>
						<ul className='mt-4 space-y-4'>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									FAQ
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900'>
									Shipping & Returns
								</a>
							</li>
						</ul>
					</div>

					{/* Column 4: Logo/Brand */}
					<div className='col-span-2 md:col-span-1'>
						<div className='text-xl font-bold text-gray-800'>
							The Modern Retail
						</div>
						<p className='mt-2 text-gray-500'>
							Effortless style for the modern wardrobe.
						</p>
					</div>
				</div>

				{/* Bottom section with copyright and social links */}
				<div className='mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center'>
					<p className='text-base text-gray-400'>
						&copy; 2025 The Modern Retail. All rights reserved.
					</p>
					<div className='flex space-x-6 mt-4 sm:mt-0'>
						{/* Using text placeholders for social icons */}
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							FB
						</a>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							IG
						</a>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							X
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
