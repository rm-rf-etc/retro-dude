import tank from "../data/tank";
import dimensional from "weir/src/structures/dimensional";

export default tank.bucket("GLOBAL.BOARDS", dimensional({

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
