const getSolution = async () => {
  const solution = document.getElementById("solution");
  const response = await axios.get("https://techy-api.vercel.app/api/text");
  const quote = response.data;

  let text = document.createElement("p");
  text.innerHTML = quote;

  solution.innerHTML = "";
  solution.appendChild(text);
};
