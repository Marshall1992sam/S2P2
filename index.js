const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const price = [34, 5, 2];
const shippingCosts = 50;
let utenteCheEffettuaLAcquisto = amy;

const users = [];
users.push(marco);
users.push(paul);
users.push(amy);

const ambassadorUsers = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const isAmbassador = user.isAmbassador;
  const fullName = user.name + " " + user.lastName;

  if (isAmbassador) {
    ambassadorUsers.push(user);
    console.log(fullName + " è un ambassador");
  } else {
    console.log(fullName + " non è un ambassador");
  }
}

console.log("Ambassador Users:", ambassadorUsers);

const user = {
  name: "Samuele",
  isAmbassador: true,
};

const prices = [34, 50, 20];
const shippingCost = 10;

let totalCost = 0;

// Calcola il costo totale dei prodotti nel carrello
for (const price of prices) {
  totalCost += price;
}

// Verifica se l'utente è un ambassador e applica lo sconto
if (user.isAmbassador) {
  totalCost -= totalCost * 0.30; // Sconto del 30%
}

// Verifica se la spedizione è gratuita o se è necessario aggiungere il costo di spedizione
if (totalCost > 100) {
  // La spedizione è gratuita
  console.log("Spedizione gratuita");
} else {
  totalCost += shippingCost;
  console.log("Costo spedizione:", shippingCost);
}

console.log("Costo totale del carrello:", totalCost);