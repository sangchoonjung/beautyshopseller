const isAdmin = () => {
  console.log(typeof localStorage.getItem("token"));
  return !!localStorage.getItem("token");
};

export default isAdmin;
