import React from 'react';
import PropTypes from 'prop-types';

import ContextLayout from '../../../ContextLayout';

import cls from '../../../../utils/ClassNames';

import styles from './MenuItem.css';

const createOrderTitle = (title, order) => `${order}. ${title}`;

class MenuItem extends React.Component {
    render() {
        const { name, index, id, menuBlock } = this.props;

        const itemStyles = item => cls({
            [styles.root]: true,
            [styles.active]: item === id
        });

        return (
            <ContextLayout.Consumer>
                {({ chooseUIItem, item }) => (
                    <div
                        className={itemStyles(item)}
                        onClick={() => chooseUIItem(id, menuBlock)}
                    >
                        {createOrderTitle(name, index)}
                    </div>
                )}
            </ContextLayout.Consumer>
        );
    }
}

MenuItem.propTypes = {
    /** id */
    id: PropTypes.string,
    /** Название элемента меню */
    name: PropTypes.string,
    /** Порядковый номер */
    index: PropTypes.string,
    /** Название блока меню */
    menuBlock: PropTypes.string
};

export default MenuItem;
