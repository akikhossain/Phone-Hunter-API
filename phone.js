const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};
const displayPhones = (phones, isShowAll) => {
  const phoneHunter = document.getElementById("phone-container");
  phoneHunter.textContent = "";

  const showMore = document.getElementById("hidden-container");
  if (phones.length > 12 && !isShowAll) {
    showMore.classList.remove("hidden");
  } else {
    showMore.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card w-96 bg-base-100 shadow-xl`;
    phoneCard.innerHTML = ` <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="Mobile Phone"
      class="rounded-xl"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions">
      <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>`;
    phoneHunter.appendChild(phoneCard);
  });

  toggleLoadingSpinner(false);
};

const handleClick = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("spin-container");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

const handleShowAll = () => {
  handleClick(true);
};

const showDetails = async (id) => {
  console.log("show details clickedddd", id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data.data;
  showDetailsModal(phone);
};

const showDetailsModal = (phone) => {
  console.log(phone);

  const phoneName = document.getElementById("show-detail-phone-name");
  phoneName.innerHTML = phone.name;
  show_details_modal.showModal();
};
// loadPhone();
