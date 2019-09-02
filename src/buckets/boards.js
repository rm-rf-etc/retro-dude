import { bucket } from "../data/tank";
import dimensional from "react-substrate/structures/dimensional";

export default bucket("GLOBAL.BOARDS", dimensional({

	default: {
		name: "Your New Board",
	},

	space: [["B", 1]],

	methods: ({ select, extend, set }) => ({

		viewBoards(query) {
			select(query);
		},

		setOne() {
			set(1, { name: "Test" });
		},

		addBoard() {
			const name = window.prompt();
			if (!name) return;
			const board = { name };
			extend("B", board);
			return board;
		},

	}),
}));
