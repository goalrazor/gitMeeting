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

const dog = new Animal("Sambo", "dog", "any", "5", "not very dangerous");


const animalContainer = document.querySelector('.animal-container');
const dogElement = animalContainer.querySelector('.dog');

function animalTalks(animalElement, animalClass) {
    animalElement.addEventListener('click', () => {
        const animalTalks = animalElement.querySelector('.animal__talks');
        animalTalks.textContent = animalClass.desciption();
        animalTalks.classList.toggle('opened');
    })
}

animalTalks(dogElement, dog);

cat.desciption();
cat.talk("may");
console.log(cat.jump());


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
