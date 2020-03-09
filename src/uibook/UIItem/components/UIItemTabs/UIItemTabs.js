import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TABS } from '../../../constants';
import cls from '../../../../utils/ClassNames';

import styles from './UIItemTabs.css';

class UIItemTabs extends Component {
    state = {
        selectedTab: TABS.DESCRIPTION
    };

    handleClickTab = selectedTab => {
        this.setState({
            selectedTab
        });
    };

    render() {
        const { renderDescription, renderAPI, apiIsEmpty } = this.props;
        const { selectedTab } = this.state;

        const renderTab = selectedTab === TABS.DESCRIPTION ? renderDescription : renderAPI;
        const tabDescriptionStyle = cls({
            [styles.tab]: true,
            [styles.tabSelected]: selectedTab === TABS.DESCRIPTION
        });

        const tabAPIStyle = cls({
            [styles.tab]: true,
            [styles.tabSelected]: selectedTab === TABS.API
        });

        return (
            <div className={styles.root}>
                <div className={styles.tabs}>
                    <div className={tabDescriptionStyle} onClick={() => this.handleClickTab(TABS.DESCRIPTION)}>
                        <span className={styles.tabText}>Description</span>
                    </div>
                    {!apiIsEmpty && (
                        <div className={tabAPIStyle} onClick={() => this.handleClickTab(TABS.API)}>
                            <span className={styles.tabText}>API</span>
                        </div>
                    )}
                </div>
                <div className={styles.content}>{renderTab()}</div>
            </div>
        );
    }
}

UIItemTabs.propTypes = {
    /** Флаг пустого объекта с api */
    apiIsEmpty: PropTypes.bool,
    renderDescription: PropTypes.func.isRequired,
    renderAPI: PropTypes.func.isRequired
};

export default UIItemTabs;
