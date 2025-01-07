const quiz = [
    {
        question:"What does BOM stand for?",
        options: ["Bowser", "Browser Object Model", "Bread Objects Money", "Benz"],
        answer: 1
    },

    {
        question:"What keyword do you use to create an instance of a class?",
        options: ["Present", "Old", "New", "Cast"],
        answer: 2
    }, 

    {
        question:"What is the first index of an array?",
        options: ["1", "2", "3", "0"],
        answer: 3
    }

]

let score = 0;


function runQuiz (array) {
    array.forEach(function(questionS) {
        console.log(questionS.question);
        console.log(questionS.options);
        let input = Number(window.prompt("Type an index for the answer"));
        if(input === questionS.answer);
        score++;
    });

    console.log(`Great Job! You answered ${score} out of ${array.length} questions correctly.`);
}


runQuiz(quiz);