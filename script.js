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


const animalContainer = document.querySelector('.animal-container');
const dogElement = animalContainer.querySelector('.dog');
const ratElement = animalContainer.querySelector('.rat');

const animals = {
    dog: {
        element: dogElement,
        type: dog
    },
    rat: {
        element: ratElement,
        type: rat
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


// function animalTalks() {
//     return catSays("Мяу") + " " +
//         dogSays() + " " + //"Гав-гав"
//         ratSays("Пи-пи-пи") + " " +
//         crowSays() + " " + //"Кар"
//         ferretSays("Кути-кути-кути") + " " +
//         monkeySays() + " " +  //"У-а-а-а"
//         frogSays("Ква-ква") + " " +
//         tigerSays() + " " + //"РРРР"
//         goatSays("Бээээ") + " " +
//         snakeSays() + " " + //"Ашассах шассах"
//         pigeonSays("Курлы-курлы");
// }

// console.log(animalTalks());
