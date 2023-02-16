interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animals = Bird | Horse;

function moveAnimal(animal: Animals) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 200 });
