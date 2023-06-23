import Cookies from 'js-cookie';


export const setCookies = (list) => {
        console.log(list)
        Cookies.set('list', JSON.stringify(list))
        const test = Cookies.get('list');
}       