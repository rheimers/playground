//alert("Ich funktioniere");

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const rootStyle = document.documentElement.style;
  if (isDark) rootStyle.setProperty("--main-bg-color", "hotpink");
});
