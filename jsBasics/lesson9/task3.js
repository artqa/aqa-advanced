const car1 = {
  brand: 'Wiesmann',
  model: 'GT MF5',
  year: 2009,
};

const car2 = {
  brand: 'ZAZ Tavria',
  model: 'ZAZ-11055',
  owner: 'Tolya',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
