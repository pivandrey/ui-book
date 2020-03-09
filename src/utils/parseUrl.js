export const parseUrl = url => {
    if (!url || url.length === 0) {
        return { menu: '', item: '' };
    }
    const urlWithoutSlash = url.replace('?', '');
    const [menu, ui] = urlWithoutSlash.split('&');
    const menuValue = menu.replace('menu=', '');
    const uiValue = ui.replace('ui=', '');

    console.log({ menu, ui })

    return { menu: menuValue, item: uiValue };
};
