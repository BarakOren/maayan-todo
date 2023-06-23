import Cookies from "js-cookie";

export const setCookies = (list) => {
        console.log(list)
        Cookies.set('list', JSON.stringify(list))
}       

// useEffect(() => {
//         setCookies(todoList)
//       }, [JSON.stringify(todoList)])
      
//       useEffect(() => {
//         const cookies = Cookies.get('list')
//         const arrayList = JSON.parse(cookies)
//         setTodoList(arrayList)
//       }, [])