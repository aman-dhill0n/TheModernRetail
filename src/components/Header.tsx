import React from 'react';

export default function Header() {
	return (
		<header className='bg-white shadow-md'>
			<nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
				{/* Logo */}
				<div className='text-xl font-bold text-gray-800'>The Modern Retail</div>

				{/* Navigation Links */}
				<div className='hidden md:flex space-x-6'>
					<a href='#' className='text-gray-600 hover:text-gray-800'>
						New Arrivals
					</a>
					<a href='#' className='text-gray-600 hover:text-gray-800'>
						Collections
					</a>
					<a href='#' className='text-gray-600 hover:text-gray-800'>
						Sale
					</a>
				</div>

				{/* Icons */}
				<div className='flex space-x-4'>
					{/* We'll use placeholder text for icons for now */}
					<a href='#' className='text-gray-600'>
						🔍
					</a>
					<a href='#' className='text-gray-600'>
						👤
					</a>
					<a href='#' className='text-gray-600'>
						🛒
					</a>
				</div>
			</nav>
		</header>
	);
}
