export default () => {
    return {headers: {"x-acces-token":window.localStorage.getItem('JWTK') }} 
}