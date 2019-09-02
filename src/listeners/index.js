import { boards } from '../buckets';

export default [
	{
		bucket: boards,
		handler: (struct) => {
			console.log('struct!', struct);
			window.struct = struct;
		},
	},
];
