/*eslint no-use-before-define:0 */
/*eslint no-undef:0 */
/*eslint no-console:0 */
let cachedSchemas;
import R from "ramda";

function getSchema(type, ...rest){
  cachedSchemas = cachedSchemas || createSchemas(...rest);
  return cachedSchemas[type] || schemas.fallthrough;
}

function createSchemas(schemas, ...rest){
  return R.reduce((acc, data) => {
    const type = R.keys(data)[0];
    const rawSchema = data[type];
    const schema = createSchema(rawSchema, ...rest);
    acc[type] = schema;
    return acc;
  }, {}, schemas);
}

function createSchema(schema, components, allHandlers, cardContext){
  const allFields = R.map(({type, fields, component, handlers, context }) => {
    component = component ? components[type] : undefined;
    handlers = handlers ? allHandlers[handlers] : undefined;
    return { type, fields, component, handlers, context };
  }, schema);

  return R.reject(({context}) => context && context !== cardContext, allFields);
 }

export default getSchema;
