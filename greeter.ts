interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

document.body.innerHTML = greet({firstName: "Bob", lastName: "Ross"});

