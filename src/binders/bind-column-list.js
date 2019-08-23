
const bindings = (dataRef) => ({

	dataRef,

	schema: {
		columnsList: ['stringified', []],
	},

	methods: (getState, { put }) => ({

		createColumn: () => {
			const name = prompt('Please give your column a name');
			if (name) put('columnsList', getState('columnsList').concat([{ name }]));
		},

		spliceColumn: (uid) => {
			let columnsList = getState('columnsList');
			columnsList.splice(columnsList.findIndex(i => i.uid === uid), 1);
			put('columnsList', columnsList);
		},

		renameColumn: (uid) => {
			const name = prompt('Enter new name');
			if (!name) return;
			const columnsList = getState('columnsList');
			const idx = columnsList.findIndex(c => c.uid === uid);
			columnsList[idx].name = name;
			put('columnsList', columnsList)
		},
	}),
});

export default bindings;
