import persistedQueries from '../../../src/persisted-queries';
import {parse} from 'graphql';
import isEqual from 'lodash/isEqual';

const persistedQueriesArray = Object.entries(persistedQueries)
    .map(([id, value]) => ({...value, id}))
    .map(item => {
        let names = [];
        try {
            const parsedQuery = parse(item.query);
            names = parsedQuery.definitions.map(definition => {
                try {
                    if (definition.operation === 'query') {
                        return definition.name.value;
                    }
                } catch (e) {

                }
                return null;
            }).filter(name => !!name);
        } catch (e) {

        }

        return {
            ...item,
            names,
        };
    }).filter(item => item.names.length > 0);

function find(names) {
    return persistedQueriesArray.find(item => isEqual(item.names, names));
}

export default {
    find,
};
