import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'operation-xml-parser',
	handler: ({ text }) => {
		console.log(text);
	},
});
