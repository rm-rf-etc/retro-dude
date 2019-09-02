import React from 'react';
import { funnel } from 'react-substrate';
import boardsBucket from '../buckets/boards';

const Boards = ({
	bucketState: {
		"_$": boardList,
	},
	bucketMethods: {
		setOne,
	},
}) => {
	const len = 1;
	return (
		<div className="app" style={{ gridTemplateColumns: `repeat(${len}, 1fr)` }}>
			<div className="row1" style={{ gridColumn: `1 / ${len + 1}` }}>
				<h1>Retro Dude</h1>
				<button
					className="add-column-btn"
					onClick={setOne}
				>
					Insert
				</button>
				<div>
					<h4>retro dude is retro</h4>
				</div>
				<ul>
					<li>
						<pre>{JSON.stringify(boardList, null, "  ")}</pre>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default funnel(
	boardsBucket,
	["_$"],
	Boards,
);
