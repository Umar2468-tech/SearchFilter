const users = document.querySelector("#user");
const usersName = document.querySelector(".user-list");
const userArr = [];

const getUserdata = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log(data);

    if(data){
        usersName.innerHTML = ""
    }

    data.map((user) => {
      const li = document.createElement("li");
      userArr.push(li)
      console.log(userArr)
      li.insertAdjacentHTML(
        "afterbegin",
        `
                <div class="user-data">
            <img src=${user.avatar_url} alt="">
            <div>
              <p>${user.login}</p>
              <a href=${user.html_url}>${user.html_url}</a>
            </div>
          </div>
                
                `
      );
      usersName.appendChild(li)
    });
  } catch (error) {
    console.log(error);
  }

  users.addEventListener('input', (e)=>{
    const val = e.target.value;
    console.log(val)

    userArr.map((curElem)=>{
        curElem.innerText.toLowerCase().includes(val.toLowerCase()) ?
        curElem.classList.remove('hide') : 
        curElem.classList.add('hide');
    })
  })
};

getUserdata();
