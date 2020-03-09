import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

import styles from './MenuBlock.css';

const createOrderTitle = (title, order) => `${order}. ${title}`;

class MenuBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExtended: props.chooseMenuBlock === props.title.toLowerCase()
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isExtended: !prevState.isExtended
        }));
    };

    render() {
        const { title, items, index } = this.props;
        const { isExtended } = this.state;

        return (
            <div className={styles.root}>
                <h3 className={styles.title} onClick={this.handleClick}>
                    {createOrderTitle(title, index)}
                </h3>
                {isExtended &&
                    Object.keys(items).map((key, i) => {
                        const { name } = items[key];
                        return (
                            <MenuItem
                                key={key}
                                index={`${index}.${i + 1}`}
                                id={key}
                                name={name}
                                menuBlock={title.toLowerCase()}
                            />
                        );
                    })}
            </div>
        );
    }
}

MenuBlock.propTypes = {
    /** Название блока меню */
    title: PropTypes.string,
    /** Объект с элементами меню */
    items: PropTypes.object,
    /** Порядковый номер */
    index: PropTypes.number,
    /** Блок меню из URL */
    chooseMenuBlock: PropTypes.string
};

export default MenuBlock;
