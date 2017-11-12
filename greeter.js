function greet(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
document.body.innerHTML = greet({ firstName: "Bob", lastName: "Ross" });
