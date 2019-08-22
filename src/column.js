import React from 'react';
import PostsList from './posts';
import { bind } from 'react-gun';
import { methods, schema } from './binders/bind-column-list';
import { methods as postMethods, schema as postSchema } from './binders/bind-posts-list';


const Column = bind('columns', methods, schema)(({
	uid, name, pos,
	'@methods': { spliceColumn, renameColumn },
}) => {
	const Posts = bind(`postsLists${pos}`, postMethods, postSchema)(PostsList);

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
