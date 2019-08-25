import React from 'react';
import { bind } from 'react-substrate';
import connectors from '../connectors/boards';
// import Board from './boards';


const App = ({
	'@state': { boards = [] },
	'@methods': { addBoard, addColumn },
}) => {
	const len = boards.length;

	return (
		<div className="app" style={{ gridTemplateColumns: `repeat(${len}, 1fr)` }}>
			<div className="row1" style={{ gridColumn: `1 / ${len + 1}` }}>
				<h1>Retro Dude</h1>
				<button className="add-column-btn" onClick={addBoard}>Add Board</button>
				<button className="add-column-btn" onClick={addColumn}>Add Column</button>
				<div>
					<h4>retro dude is retro</h4>
				</div>
			</div>
		</div>
	);
};

export default bind(connectors, App);
