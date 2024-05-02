const phones = [
  {
    name: "samsung",
    camera: 12,
    Storage: "32gb",
    display: "amolad",
    price: 9500,
  },

  {
    name: "walton",
    camera: 42,
    Storage: "64gb",
    display: "superamolad",
    price: 1000,
  },
  {
    name: "iphone",
    camera: 12,
    Storage: "16gb",
    display: "amolad",
    price: 90000,
  },
  {
    name: "redmi",
    camera: 64,
    Storage: "128gb",
    display: "superamolad",
    price: 20000,
  },
  {
    name: "oneplus",
    camera: 64,
    Storage: "254gb",
    display: "superamolad",
    price: 15000,
  },
  {
    name: "Oppo",
    camera: 14,
    Storage: "14gb",
    display: "superamolad",
    price: 40000,
  },
];

function chapestPhone(phones) {
  let chapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chapest.price) {
      chapest = phone;
    }
    //console.log(phone);
  }
  return chapest;
}
const mySelection = chapestPhone(phones);
console.log("The cheapest phone is ", mySelection);
