import { bucket } from "../data/tank";

export default bucket("LOCAL.FORM", {

	properties: {
		input1: "",
		num1: 0,
		input2: "",
		num2: 0,
	},

	methods: ({ getState, put }) => ({

		setInput1: ({ target }) => {
			put("input1", target.value);
		},

		increment1: () => {
			put("num1", getState().num1 + 1);
		},

		setInput2: ({ target }) => {
			put("input2", target.value);
		},

		increment2: () => {
			put("num2", getState().num2 + 1);
		},

	}),
});
