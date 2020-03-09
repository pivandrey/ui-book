/** Парсим конфиг в Объект вида { button: ButtonComponent } */
export default function(config) {
    const newObj = {};
    Object.keys(config).forEach(key => {
        const blockItems = config[key].items;
        Object.keys(blockItems).forEach(itemKey => {
            newObj[itemKey] = blockItems[itemKey].component;
        });
    });
    return newObj;
}
