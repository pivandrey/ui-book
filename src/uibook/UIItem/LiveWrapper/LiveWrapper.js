import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import cls from '../../../utils/ClassNames';
import Button from '../../../components/Button';
import ExampleDescription from './ExampleDescription';

import styles from './style.css';

class LiveWrapper extends React.Component {
    state = {
        isShowEditor: false
    };

    handleClick = () => {
        this.setState(prevState => ({
            isShowEditor: !prevState.isShowEditor
        }));
    };

    render() {
        const { code, scope, exampleDescription, type } = this.props;
        const { isShowEditor } = this.state;

        const exampleWrapperStyle = cls({
            [styles.exampleWrapper]: true,
            [styles.exampleWrapperWithoutDescription]: !exampleDescription,
            [styles.exampleWrapperLayout]: type === 'layout'
        });

        return (
            <div className={exampleWrapperStyle}>
                {exampleDescription && (
                    <div className={styles.exampleDescriptionWrapper}>
                        <ExampleDescription {...exampleDescription} />
                    </div>
                )}
                <LiveProvider code={code} scope={scope}>
                    <div className={styles.errorWrapper}>
                        <LiveError />
                    </div>
                    <div className={styles.previewWrapper}>
                        <LivePreview />
                        <div className={styles.buttonExtendWrapper}>
                            <Button
                                size="sm-rectangle"
                                bg="blue-transparent"
                                content={
                                    <span>
                                        &lt;
                                        {isShowEditor ? 'Hide code' : 'Show code'}
                                        &gt;
                                    </span>
                                }
                                handleClick={this.handleClick}
                            />
                        </div>
                    </div>
                    {isShowEditor && (
                        <div className={styles.editorWrapper}>
                            <LiveEditor />
                        </div>
                    )}
                </LiveProvider>
            </div>
        );
    }
}

LiveWrapper.defaultProps = {
    type: 'component'
};

LiveWrapper.propTypes = {
    /** Тип UI компонента */
    type: PropTypes.string,
    /** Код для транспиляции */
    code: PropTypes.string,
    /** Глобальные переменные */
    scope: PropTypes.object,
    /** Объект с описанием */
    exampleDescription: PropTypes.object
};

export default LiveWrapper;
