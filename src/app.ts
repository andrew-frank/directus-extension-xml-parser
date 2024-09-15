import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
  id: 'operation-xml-parser',
  name: 'XML parser',
  icon: 'code_blocks',
  description: 'This operation parses XML string and turns it into a JSON object.',
	overview: ({ xml }) => [
		{
			label: 'XML',
			text: xml,
		},
	],
	options: [
		{
			field: 'xml',
			name: 'XML',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
