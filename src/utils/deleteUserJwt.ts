export const deleteUserJwt = () => {
    if(localStorage.getItem('user')){
        localStorage.removeItem('user')
    }
}