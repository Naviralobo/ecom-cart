const loadComponent = async (path, id) => {
  const res = await fetch(path);
  const html = await res.text();

  document.getElementById(id).innerHTML = html;
};

export const loadLayout = async () => {
  await loadComponent("../../components/header.html", "header");
  await loadComponent("../../components/footer.html", "footer");
};
