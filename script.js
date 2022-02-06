class Animal {
    constructor(name, kindOfAnimal, typeOfFood, age, dangerous) {
        this.name = name;
        this.kindOfAnimal = kindOfAnimal;
        this.typeOfFood = typeOfFood;
        this.age = age;
        this.dangerous = dangerous;
    }

    desciption() {
        return `Hello, my name is ${this.name}. I'm ${this.kindOfAnimal} and i like to eat ${this.typeOfFood}. I'm ${this.age} age old and I'm ${this.dangerous}`
    }

    talk(word) {
        return word;
    }

    walk(speed) {
        return "Running speed is - " + speed;
    }
}

const dog = new Animal("Harley", "dog", "any", "7", "not very dangerous");
const rat = new Animal("Sambo", "rat", "any", "1", "not dangerous");
const cat = new Animal("Ciri", "cat", "any", "2", "very dangerous");



const animalContainer = document.querySelector('.animal-container');
const dogElement = animalContainer.querySelector('.dog');
const ratElement = animalContainer.querySelector('.rat');
const catElement = animalContainer.querySelector('.cat');

const animals = {
    dog: {
        element: dogElement,
        type: dog
    },
    rat: {
        element: ratElement,
        type: rat
    },
    cat: {
        element: catElement,
        type: cat
    }
};

function animalTalks(animalElement, animalClass) {
    animalElement.addEventListener('click', () => {
        const animalTalks = animalElement.querySelector('.animal__talks');
        animalTalks.textContent = animalClass.desciption();
        animalTalks.classList.toggle('opened');
    })
}

for (const animal of Object.values(animals)) {
    animalTalks(animal.element, animal.type);
}

