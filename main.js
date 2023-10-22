const search = document.getElementById("search-form");
const userInput = document.getElementById("user-input");
const userName = document.getElementById("user-name");
const repoCount = document.getElementById("repo-count");
const avatar = document.getElementById("avatar");

const searchUser = (username) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      const data = res.data;
      userName.innerHTML = data.name;
      repoCount.innerHTML = data.public_repos;
      avatar.src = data.avatar_url;
    })
    .catch((error) => {
      console.error("Error looking for user", error);
    });
};

search.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = userInput.value;
  searchUser(username);
});
