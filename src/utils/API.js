const BASEURL = "https://randomuser.me/api/?inc=name,email,picture,id&results=100";

const API = {
  fetchEmployees: () => fetch(BASEURL)
}

export default API;
