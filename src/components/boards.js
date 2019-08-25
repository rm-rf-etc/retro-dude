import React from 'react';
// import PostsList from './posts';
// import postsConnector from './connectors/posts';
import glue from '../connectors/boards';
import { bind } from 'react-substrate';

const Column = bind(glue('BOARDS'), ({
	uid,
	name,
	pos,
	'@methods': { deleteBoard, renameBoard },
}) => (
	<div className="row2" style={{ gridColumn: pos }}>
		<button onClick={() => renameBoard(uid)}>rename board</button>
		<button onClick={() => deleteBoard(uid)}>delete board</button>
		<h2>{name}</h2>
		<Posts />
	</div>
));

export default Column;
