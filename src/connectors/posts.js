import { boards } from '../indices';

const bindings = {

	index: boards,

	schema: {
		postsList: ['stringified', []],
	},

	methods: (getState, { put }) => ({

		createPost: () => {
			const content = prompt('Enter your message');
			if (content) put('postsList', getState('postsList').concat([{ content }]));
		},

		splice: (uid) => {
			let postsList = getState('postsList');
			postsList.splice(postsList.findIndex(i => i.uid === uid), 1);
			put('postsList', postsList);
		},

		edit: (uid) => {
			const content = prompt('Enter new content');
			if (!content) return;
			const postsList = getState('postsList');
			const idx = postsList.findIndex(c => c.uid === uid);
			postsList[idx].content = content;
			put('postsList', postsList)
		},
	}),
});

export default bindings;
