import React from 'react';
import PropType from 'prop-types';

function TechItem({ tech, onDelete }) {
	return (
		<li>
			{tech}
			<button type="button" onClick={onDelete}>
				Remover
			</button>
		</li>
	);
}

TechItem.defaultProps = {
	tech: 'Oculto'
};

TechItem.propType = {
	tech: PropType.string,
	onDelete: PropType.func.isRequired
};

export default TechItem;
