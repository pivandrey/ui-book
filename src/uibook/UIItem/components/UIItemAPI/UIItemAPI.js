import React from 'react';
import PropTypes from 'prop-types';

import styles from './UIItemAPI.css';

class UIItemAPI extends React.Component {
    renderType = ({ type, values }) => {
        if (type === 'oneOfType' && values.length === 1) {
            return values[0];
        }
        return (
            <div className={styles.bigType}>
                <span className={styles.initialText}>
                    {type}
                    ([
                    {values.map((value, index) => (
                        <React.Fragment key={value}>
                            <span className={styles.highlightText}>
                                &quot;
                                {value}
                                &quot;
                            </span>
                            {index < values.length - 1 && <span>, </span>}
                        </React.Fragment>
                    ))}
                    ])
                </span>
            </div>
        );
    };

    renderDefaultProp = defaultProp => {
        if (defaultProp === undefined) {
            return '';
        }
        if (typeof defaultProp === 'function') {
            return '( ) => { }';
        }
        if (typeof defaultProp === 'string' && defaultProp.length === 0) {
            return `""`
        }
        if (defaultProp instanceof Array && defaultProp.length === 0) {
            return `[ ]`
        }
        return String(defaultProp);
    };

    render() {
        const { api } = this.props;

        return (
            <div className={styles.root}>
                <h2 className={styles.title}>Props</h2>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>DefaultValue</th>
                                <th>Required</th>
                                <th>Description</th>
                            </tr>
                            {Object.keys(api).map(key => {
                                const { type, required, defaultProp, comment } = api[key];
                                return (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{this.renderType(type)}</td>
                                        <td>{this.renderDefaultProp(defaultProp)}</td>
                                        <td>{required ? '+' : ''}</td>
                                        <td>{comment}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

UIItemAPI.defaultProps = {
    api: {}
};

UIItemAPI.propTypes = {
    api: PropTypes.object
};

export default UIItemAPI;
