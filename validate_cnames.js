const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const CNAMES = require("./cnames.json");

const recordSchema = {
    $id: "https://codes.kiwi/schemas/record.json",
    type: "object",
    properties: {
        name: {
            type: "string",
            // TODO: pattern for record names
        },
        target: {
            type: "string",
            pattern: "^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\\.[a-z]{2,})$"
        },
        noCloudflare: {
            type: "boolean"
        }
    },
    required: ["name", "target", "noCloudflare"],
    additionalProperties: false
}

const rootSchema = {
    $id: "https://codes.kiwi/schemas/schema.json",
    type: "array",
    items: {
        $ref: "https://codes.kiwi/schemas/record.json"
    }
}

const validate = ajv.addSchema(recordSchema).compile(rootSchema);
const valid = validate(CNAMES);

if (!valid) {
    console.log(validate.errors);
    process.exit(1);
} else {
    console.log("Validation successful.");
    process.exit(0);
}