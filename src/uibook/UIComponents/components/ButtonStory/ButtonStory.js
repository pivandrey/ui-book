import Button from '../../../../components/Button';

import { COMPONENTS_TYPES } from '../../../constants';
import getPropTypes from '../../../utils/getPropTypes';
import apiDescription from './apiDescription';
import { example1, example2, mainExample } from './examples/examples';
import { exampleDescription1, exampleDescription2 } from './descriptions/descriptions';

export default {
    title: 'Button',
    renderExample: mainExample,
    description: 'Button is a default component to display action in a page.',
    importExample: `import Button from 'Button';`,
    api: getPropTypes(Button, apiDescription),
    examples: [
        {
            id: 'colors',
            code: example1,
            exampleDescription: exampleDescription1,
            scope: { Button },
            type: COMPONENTS_TYPES.COMPONENT
        },
        {
            id: 'sizes',
            code: example2,
            exampleDescription: exampleDescription2,
            scope: { Button },
            type: COMPONENTS_TYPES.COMPONENT
        }
    ]
};
