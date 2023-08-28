import { defineOperationApi } from '@directus/extensions-sdk';
import { XMLParser } from "fast-xml-parser";

type Options = {
	text: string;
};

export default defineOperationApi<Options>({
	id: 'operation-xml-parser',
	handler: (options) => {
		const { text } = options
		const parser = new XMLParser();
		const jObj = parser.parse(text);
		return jObj
	},
});
