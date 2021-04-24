const BASEURL = "https://randomuser.me/api/?inc=name,email,picture,phone,id&results=20&nat=US";

const API = {
  fetchEmployees: () => fetch(BASEURL)
}

export default API;
