import { bucket } from 'react-substrate';
import { dimensional } from 'react-substrate/structures';

export const posts = bucket(
    Symbol.for('LOCAL.POSTS'),
    dimensional({
        default: {},
        space: [['B', 4], ['C', 3]],
        methods: (getState) => ({

            board: (b, c) => {
                return getState('posts', [b, c]);
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
    }),
);
