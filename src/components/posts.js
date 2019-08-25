import React from 'react';

const PostsList = ({
	'@state': { postsList = [] },
	'@methods': { edit, createPost, splice },
}) => (
	<div>
		<button onClick={createPost}>add</button>
		{postsList.map(({ uid, content }) => (
			<div className="post" key={uid}>
				<button onClick={() => edit(uid)}>edit</button>
				<button onClick={() => splice(uid)}>delete</button>
				<p>{content}</p>
			</div>
		))}
	</div>
);

export default PostsList;
