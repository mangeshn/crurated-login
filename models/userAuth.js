export const isUserLoggedIn = () => {
    const userLogin = sessionStorage.getItem('isLoggedIn');
    return userLogin
}

export const getUserData = () => {
    return sessionStorage.getItem('userData');
}
