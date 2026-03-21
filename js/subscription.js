const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const initSubscribe = () => {
  const emailInput = document.getElementById("emailSubscribe");
  const subscribeBtn = document.getElementById("subscribe-btn");

  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("close-modal");

  if (!subscribeBtn || !emailInput || !modal || !modalText || !closeModal) {
    return;
  }

  subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter an email");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Enter a valid email");
      return;
    }

    modalText.textContent = `Email subscribed for ${email}`;
    modal.classList.remove("hidden");
    emailInput.value = "";
  });

  closeModal?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
};
