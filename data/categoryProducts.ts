import { faker } from "@faker-js/faker";

export default async function categoryProducts() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return Array.from({ length: 24 }).map(() => {
    return {
      id: faker.number.int({ min: 1, max: 3000 }).toString(),
      name:
        "Pneu Dunlop " +
        `${faker.number.int({ min: 160, max: 215 })}/${faker.number.int({
          min: 50,
          max: 70,
        })}/${faker.number.int({ min: 12, max: 18 })}`,
      price: faker.number.int({ min: 160, max: 280 }).toString(),
    };
  });
}

// retorna { id: id, name: name, price: price }
