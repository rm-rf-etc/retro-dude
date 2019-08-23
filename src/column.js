import React from 'react';
import PostsList from './posts';
import { bind } from 'react-gun';
import getColumnBindings from './binders/bind-column-list';
import getPostsListBindings from './binders/bind-posts-list';


const Column = bind(getColumnBindings('columns'), ({
	uid, name, pos,
	'@methods': { spliceColumn, renameColumn },
}) => {
	const Posts = bind(getPostsListBindings(`postsLists${uid}`), PostsList);

	return (
		<div className="row2" style={{ gridColumn: pos }}>
			<button onClick={() => renameColumn(uid)}>rename</button>
			<button onClick={() => spliceColumn(uid)}>delete column</button>
			<h2>{name}</h2>
			<Posts />
		</div>
	);
});

export default Column;
