const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};
const displayPhones = (phones) => {
  const phoneHunter = document.getElementById("phone-container");
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
      <button class="btn btn-primary">Show Details</button>
    </div>
  </div>`;
    phoneHunter.appendChild(phoneCard);
  });
};

loadPhone();
