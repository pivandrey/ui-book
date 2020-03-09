import React from 'react';
import PropTypes from 'prop-types';

import isFunction from '../../../utils/isFunction';

import styles from './ExampleDescription.css';

class ExampleDescription extends React.Component {
    render() {
        const { title, text, list, content } = this.props;

        const renderContent = isFunction(content) ? content() : content;

        return (
            <div className={styles.root}>
                {title && <h3 className={styles.exampleTitle}>{title}</h3>}
                {text && <span className={styles.text}>{text}</span>}
                {list && (
                    <ul className={styles.list}>
                        {list.map(listItem => (
                            <li key={listItem} className={styles.listItem}>
                                {listItem}
                            </li>
                        ))}
                    </ul>
                )}
                {content && <div className={styles.contentWrapper}>{renderContent}</div>}
            </div>
        );
    }
}

ExampleDescription.propTypes = {
    /** Заголовок примера */
    title: PropTypes.string,
    /** Текст */
    text: PropTypes.string,
    /** Список */
    list: PropTypes.array,
    /** Дополнительный контент (может быть как функцией, так и jsx) */
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

export default ExampleDescription;
