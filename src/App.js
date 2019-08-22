import React from 'react';
import { bind } from 'react-gun';
import { methods, schema } from './binders/bind-column-list';
import Column from './column';


const App = bind('columns', methods, schema)(({
	'@state': { columnsList = [] },
	'@methods': { createColumn },
}) => {
	const len = columnsList.length;

	const columnComponents = columnsList.map(({ name, uid }) => {
		const pos = columnsList.findIndex(c => c.uid === uid) + 1;
		return (
			<Column {...{pos, uid, name}} key={uid} />
		);
	});

	return (
		<div className="app" style={{ gridTemplateColumns: `repeat(${len}, 1fr)` }}>
			<div className="row1" style={{ gridColumn: `1 / ${len + 1}` }}>
				<h1>Retro Dude</h1>
				<button className="add-column-btn" onClick={createColumn}>Add Column</button>
				<p>
					<h4>retro dude is retro</h4>
				</p>
			</div>
			{columnComponents}
		</div>
	);
});

export default App;
