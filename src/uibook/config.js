import components from './UIComponents';
import transformComponentsConfig from './utils/transformComponentsConfig';

export const componentsConfig = {
    components: {
        title: 'Components',
        items: {
            button: {
                name: 'Button',
                component: components.ButtonStory
            }
        }
    }
};

export const configWithOnlyComponents = transformComponentsConfig(componentsConfig);
