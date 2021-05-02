import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item/';

import './post-list.css';

const PostList = ({ posts }) => {

	const elements = posts.map((item) => {

		//* Простой способ проверки на объект + содержится ли в нем информация
		if (typeof item === 'object' && isEmpty(item)) {
			const { id, label, important } = item;

			return (
				<li key={id} className='list-group-item'>
					<PostListItem
						label={label}
						important={important}
					/>
				</li>
			);
		}
	});

	function isEmpty(obj) {
		for (let key in obj) {
			return true;
		}
		return false;
	}

	return (
		<ListGroup className='app-list'>
			{elements}
		</ListGroup>
	);
};

export default PostList;