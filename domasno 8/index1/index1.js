const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const userName = document.getElementById("user-name");
    const userPhone = document.getElementById("user-phone");
    const userCompany = document.getElementById("user-company");

    data.forEach((user) => {
      const name = document.createElement("p")
      name.textContent = user.name
      userName.appendChild(name)

      const phone = document.createElement("p")
      phone.textContent = user.phone
      userPhone.appendChild(phone)

      const company = document.createElement("p")
      company.textContent = user.company.name
      userCompany.appendChild(company)
    });
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
