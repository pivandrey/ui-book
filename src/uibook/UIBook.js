import React from 'react';
import { withRouter } from 'react-router-dom';

import ContextLayout from './ContextLayout';
import Menu from './Menu';
import UIItem from './UIItem';
import { parseUrl } from '../utils/parseUrl';

import styles from './UIBook.css';

class UIBook extends React.Component {
    constructor(props) {
        super(props);

        const { location: { search } } = props;
        this.state = parseUrl(search);
    }

    handleChangeUIItem = (item, menu) => {
        const { history: { push } } = this.props;

        this.setState({
            item
        });

        push(`?menu=${menu}&ui=${item}`);
    };

    render() {
        const { item, menu } = this.state;

        return (
            <ContextLayout.Provider
                value={{
                    chooseUIItem: this.handleChangeUIItem,
                    item
                }}
            >
                <div className={styles.root}>
                    <Menu chooseMenuBlock={menu} />
                    {item && <UIItem item={item} />}
                </div>
            </ContextLayout.Provider>
        );
    }
}

export default withRouter(UIBook);
