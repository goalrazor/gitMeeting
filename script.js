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

class Cat extends Animal {
    constructor(name, kindOfAnimal, typeOfFood, age, dangerous, jumpHieght) {
        super(name, kindOfAnimal, typeOfFood, age, dangerous);
        this.jumpHieght = jumpHieght;
    }

    jump() {
        return `I'm jumping for ${this.jumpHieght} meters hieght`;
    }
}

const cat = new Cat("Kitei", "cat", "any", "5", "not very dangerous", 100);


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
