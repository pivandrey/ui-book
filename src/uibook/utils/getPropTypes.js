import checkPropTypes from 'check-prop-types';

// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = function(search, replace) {
    return this.split(search).join(replace);
};

/** Если prop содержит oneOf(<String>[]), то парсим ошибку в массив
 * Иначе проверяем каждый класс на соответствие пропсу */
function getPropType(propTypes, propName) {
    const fakeProps = {};
    fakeProps[propName] = 'dummy';

    const types = [];

    const error = checkPropTypes(propTypes, fakeProps, 'prop');

    // extract type from error string
    if (error !== undefined) {
        const EXPECTED_TYPE_PATTERN = /expected (\w+)/i;
        const errorString = error.toString().match(EXPECTED_TYPE_PATTERN);
        if (errorString instanceof Array) {
            const propArray = errorString.input
                .substring(errorString.input.indexOf('[') + 1, errorString.input.indexOf(']'))
                .replaceAll('"', '')
                .split(',');
            return { type: 'oneOf', values: propArray };
        }
    } else {
        types.push('string');
    }

    // extract type from error object
    fakeProps[propName] = { value: 'some' };
    const errorObject = checkPropTypes(propTypes, fakeProps, 'prop');
    if (errorObject === undefined) {
        types.push('object');
    }

    // extract type from error func
    fakeProps[propName] = () => {};
    const errorFunc = checkPropTypes(propTypes, fakeProps, 'prop');
    if (errorFunc === undefined) {
        types.push('func');
    }

    // extract type from error bool
    fakeProps[propName] = Boolean(true);
    const errorBool = checkPropTypes(propTypes, fakeProps, 'prop');
    if (errorBool === undefined) {
        types.push('bool');
    }

    // extract type from error number
    fakeProps[propName] = 1;
    const errorNumber = checkPropTypes(propTypes, fakeProps, 'prop');
    if (errorNumber === undefined) {
        types.push('number');
    }

    return { type: 'oneOfType', values: types };
}

function getPropIsRequired(propTypes, propName) {
    const fakeProps = {};
    fakeProps[propName] = null;
    const error = checkPropTypes(propTypes, fakeProps);
    return !!error;
}

/** Принимает компонент, тянет из него propTypes
 * Для каждого propType создает тест
 * Дополнительно ложит комментарии в объект */
function extractTypes(component, comments = {}) {
    const typeMap = {};
    const { propTypes = {}, defaultProps = {} } = component;

    Object.keys(propTypes).forEach(propName => {
        const propType = { [propName]: propTypes[propName] };
        const type = getPropType(propType, propName);
        const required = getPropIsRequired(propType, propName);
        const defaultProp = defaultProps[propName];
        const comment = comments[propName];
        typeMap[propName] = { type, required, defaultProp, comment };
    });
    return typeMap;
}

export default extractTypes;
