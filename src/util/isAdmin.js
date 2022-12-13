const isAdmin = () => {
    console.log(typeof localStorage.getItem('token'));
    localStorage.setItem('token', 'tokenWWWWW');
    return !!localStorage.getItem('token');
};

export default isAdmin;
