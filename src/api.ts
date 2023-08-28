import { defineOperationApi } from '@directus/extensions-sdk';
import { XMLParser } from "fast-xml-parser";

type Options = {
	xml: string;
};

export default defineOperationApi<Options>({
	id: 'operation-xml-parser',
	handler: (options) => {
		const { xml } = options
		const parser = new XMLParser();
		const jObj = parser.parse(xml);
		return jObj
	},
});
