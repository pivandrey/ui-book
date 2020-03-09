import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { componentsConfig } from '../config';
import MenuBlock from './MenuBlock';

import styles from './Menu.css';

class Menu extends React.Component {
    render() {
        const { chooseMenuBlock } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.logo}>
                    <Link to="/">
                        UI-book
                    </Link>
                </div>
                {Object.keys(componentsConfig).map((key, i) => {
                    const { title, items } = componentsConfig[key];
                    return (
                        <MenuBlock
                            key={key}
                            title={title}
                            index={i + 1}
                            items={items}
                            chooseMenuBlock={chooseMenuBlock}
                        />
                    );
                })}
            </div>
        );
    }
}

Menu.propTypes = {
    /** Блок меню из URL */
    chooseMenuBlock: PropTypes.string
};

export default Menu;
