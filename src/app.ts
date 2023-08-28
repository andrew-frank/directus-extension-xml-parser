import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
  id: 'operation-xml-parser',
  name: 'Operation XML parser',
  icon: 'electric_bolt',
  description: 'This operation parses XML string into a JSON object.',
	overview: ({ text }) => [
		{
			label: 'Text',
			text: text,
		},
	],
	options: [
		{
			field: 'text',
			name: 'Text',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
	],
});
