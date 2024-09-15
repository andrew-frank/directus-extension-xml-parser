# directus-extension-xml-parser

Directus operation that parses XML body and outputs it as a JSON file.

## Usage

Provide the XML string inside the `XML` field of the operation.

![XML Parser Operation](https://raw.githubusercontent.com/andrew-frank/directus-extension-xml-parser/main/screenshot.jpg)

Example input:
```
<?xml version=\"1.0\" encoding=\"UTF-16\"?><film><title>Magnolia</title><director>Paul Thomas Anderson</director><year>1999</year><duration>188</duration><genre>Drama</genre></film>
```

## Build and install in Directus

1. `npm run build` to build the extension
2. Copy contents of `dist` folder, `package.json` and `package-lock.json` into the `extensions` folder in your Directus project
3. Restart the Directus app
