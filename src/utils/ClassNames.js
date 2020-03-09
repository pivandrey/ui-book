import _ from 'lodash';

const cls = classNames => {
    return _.reduce(
        classNames,
        (result, condition, className) => {
            if (condition) {
                return `${result} ${className}`;
            }
            return result;
        },
        ''
    ).substr(1);
};

export default cls;