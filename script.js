(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  // example.addEventListener("click", function () {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((array) => {
  //       console.log(array);
  //       answer.innerHTML = JSON.stringify(array);
  //     });
  // });

  cw1.addEventListener("click", function () {
    fetch("https://restcountries.com/v3.1/capital/Warsaw")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = "";
        const ul = document.createElement("ul");

        array.forEach((post) => {
          const li = document.createElement("li");
          li.innerHTML = `${post}`;
          li.innerHTML = `${post.name.common}<br><strong>${post.capital}</strong><br>${post.population}<br>${post.region}<br>${post.subregion}`;
          ul.appendChild(li);
        });

        answer.appendChild(ul);
      });
  });

  // cw2.addEventListener("click", function () {
  //   alert("Loading...");
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((response) => response.json())
  //     .then((post) => {
  //       console.log(post);
  //       answer.innerHTML = "";
  //       const ul = document.createElement("ul");
  //       const li = document.createElement("li");
  //       li.innerHTML = `${post.id}<br><strong>${post.title}</strong<br>${post.body}`;
  //       ul.appendChild(li);

  //       answer.appendChild(ul);
  //     });
  // });

  // cw3.addEventListener("click", function () {
  //   answer.innerHTML = "Processing...";

  //   const newPost = {
  //     title: "Nowy post",
  //     body: "Bratku mniam",
  //     userId: 1,
  //   };

  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newPost),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
  //     });
  // });
})();
