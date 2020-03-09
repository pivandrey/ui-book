import React from 'react';
import PropTypes from 'prop-types';

import LiveWrapper from '../../LiveWrapper';

import styles from './UIItemDescription.css';

class UIItemDescription extends React.Component {
    render() {
        const { title, description, importExample, examples } = this.props;
        return (
            <>
                <div className={styles.info}>
                    {description && <span className={styles.description}>{description}</span>}
                    {importExample && (
                        <div className={styles.importExampleWrapper}>
                            <span className={styles.importTitle}>Import</span>
                            <div className={styles.importExampleArea}>
                                <span className={styles.importExampleCode}>{importExample}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.examplesWrapper}>
                    <h2 className={styles.examplesMainTitle}>Examples</h2>
                    <div className={styles.examplesList}>
                        {examples.map((exampleProps, index) => (
                            <LiveWrapper
                                key={`${title}-${exampleProps.id || index}`}
                                {...exampleProps}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

UIItemDescription.propTypes = {
    /** Название компонента */
    title: PropTypes.string,
    /** Описание компонента */
    description: PropTypes.string,
    /** Пример импорта */
    importExample: PropTypes.string,
    /** Примеры использования */
    examples: PropTypes.array
};

export default UIItemDescription;
