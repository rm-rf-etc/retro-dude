import { boards } from '../indices';

const bindings = {

	index: boards,

	schema: {
		boards: ['dimensional', {}, [['B', 2], ['C', 2]]],
	},

	methods: (getState, { increaseLimit }) => ({

		addBoard: () => {
			const xLen = increaseLimit('b');
			// (n => n && add(n))(prompt('What do you want to name this board?'));
			return xLen;
		},

		addColumn: () => {
			return increaseLimit('c');
		},

		deleteBoard: (uid) => {
			// let columnsList = getState('columnsList');
			// columnsList.splice(columnsList.findIndex(i => i.uid === uid), 1);
			// put('columnsList', columnsList);
		},

		renameBoard: (uid) => {
			// const name = prompt('Enter new name');
			// if (!name) return;
			// const columnsList = getState('columnsList');
			// const idx = columnsList.findIndex(c => c.uid === uid);
			// columnsList[idx].name = name;
			// put('columnsList', columnsList)
		},
	}),
};

export default bindings;
