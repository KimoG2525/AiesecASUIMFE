import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
import './styling/pagingStyle.scss';

const Paging = ({ totalPages, paginate }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} href='!#' className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Paging;
