import React from 'react';
import PropTypes from 'prop-types';

import { configWithOnlyComponents } from '../config';
import UIItemTabs from './components/UIItemTabs';
import UIItemDescription from './components/UIItemDescription';
import UIItemAPI from './components/UIItemAPI';

import styles from './UIItem.css';

class UIItem extends React.Component {
    render() {
        const { item } = this.props;

        const config = configWithOnlyComponents[item];

        const { title, renderExample, api } = config;
        const apiIsEmpty = !api;

        return (
            <div className={styles.root}>
                <div className={styles.header}>
                    <h1 className={styles.componentTitle}>{title}</h1>
                    {renderExample && <div className={styles.mainExampleWrapper}>{renderExample()}</div>}
                </div>
                <UIItemTabs
                    key={title}
                    apiIsEmpty={apiIsEmpty}
                    renderDescription={() => <UIItemDescription {...config} />}
                    renderAPI={() => <UIItemAPI api={api} />}
                />
            </div>
        );
    }
}

UIItem.propTypes = {
    /** Текущий компонент */
    item: PropTypes.string
};

export default UIItem;
