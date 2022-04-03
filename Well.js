// Quiz Questions
const dietData = [
    {
      question: "1. What are the percentages of Americans that are obese and lacking in nutrients, respectively.",
      a: "33% / 80%",
      b: "10% / & 55%",
      c: "15% / 45%",
      d: "25% / 50%",
      correct: "b", 
    },
  //https://www.npr.org/sections/thesalt/2016/08/03/487640479/75-percent-of-americans-say-they-eat-healthy-despite-evidence-to-the-contrary#:~:text=Press-,75%20Percent%20of%20Americans%20Say%20They%20Eat%20Healthy%20%E2%80%94%20Despite%20Evidence,we%20eat%20with%20blinders%20on.
    {
      question: "2. From what food group should you eat the most amount of servings daily?",
      a: "Grains",
      b: "Vegetables",
      c: "Protein",
      d: "Grains & Vegetables",
      correct: "d", 
    },
  //https://healthyeating.sfgate.com/food-group-needed-highest-proportion-day-3063.html
    {
      question: "3. Which one is not a sign of a bad diet?",
      a: "Digestive Discomfort",
      b: "Feeling Tired",
      c: "Bad Oral Health",
      d: "All of the Above",
      correct: "d", 
    },
  //https://health.clevelandclinic.org/7-sneaky-signs-of-an-unhealthy-diet/
    {
      question: "4. What additional factor is not necessary in a balanced diet?",
      a: "Healthy Oils",
      b: "Exercise",
      c: "Water",
      d: "Sugar",
      correct: "d", 
    }, //https://www.health.harvard.edu/heart-health/the-sweet-danger-of-sugar
    {  
      question: "5. Eating smaller meals more often is better than the standard 3 meals", 
      a: "True",
      b: "False",
      c: "-",
      d: "-",
      correct: "b",
      },
  //https://www.heartandstroke.ca/healthy-living/healthy-eating/healthy-eating-basics
    {
      question: "6. Which one is not an example of processed food?", 
      a: "White Rice",
      b: "Bacon",
      c: "White Meats",
      d: "White Bread",
      correct: "c",
      },
    {
      question: "7. Which of the following are methods that can improve our access to healthier foods?",
      a: "Healthier consumer advertisements/support",
      b: "Increasing amount of healthier food chains",
      c: "a & b",
      d: "purchasing more high sodium products",
      correct: "c",
    },
  //https://www.cdc.gov/nutrition/healthy-food-environments/improving-access-to-healthier-food.html
    {
     question: "8. True or False: You and your community can make a difference in pursuing health mandates",
      a: "True",
      b: "False",
      c: "-",
      d: "-",
      correct: "a",
    }, 
    {
      question: "9. What is the cost of a healthy diet in proportion to an unhealthy diet?",
      a: "$1.50 daily increase",
      b: "$.75 daily decrease",
      c: "$3.00 daily decrease",
      d: "$5.00 daily increase",
      correct: "a",
    },
  //https://www.hsph.harvard.edu/news/press-releases/healthy-vs-unhealthy-diet-costs-1-50-more/
    {
      question: "10. Are your emotions, height and performance hindered by a bad diet?",
    a: "yes",
    b: "no",
    c: "-",
    d: "-",
    correct: "a",
    },
  //https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626
  ];
  const quizBox = document.getElementById("quiz_section");
  const theAnswers = document.querySelectorAll(".answer");
  const theQuestion = document.getElementById('question');
  const choice_a = document.getElementById('choice_a');
  const choice_b = document.getElementById('choice_b');
  const choice_c = document.getElementById('choice_c');
  const choice_d = document.getElementById('choice_d');
  const nextButton = document.getElementById('next');

  let currentQuestion = 0;
  let score = 0;

  setQuiz();

  function setQuiz() {

    removeChoices(); 
    const currentQuizQuestion = dietData[currentQuestion];
    theQuestion.innerText = currentQuizQuestion.question;
    choice_a.innerText = currentQuizQuestion.a;
    choice_b.innerText = currentQuizQuestion.b;
    choice_c.innerText = currentQuizQuestion.c;
    choice_d.innerText = currentQuizQuestion.d;
  }

  function checkAnswers() {
    let answer = undefined;

    theAnswers.forEach((theAnswer) => {
        if (theAnswer.checked) {
            answer = theAnswer.id;
        }
    });

    return answer;
}

  function removeChoices() {
    theAnswers.forEach((theAnswer) => {
        theAnswer.checked = false;
    });
}


  nextButton.addEventListener("click", () => {

    const answer = checkAnswers();

    if (answer) {
        if (answer === dietData[currentQuestion].correct) {
            score++;
        }
    currentQuestion++;
    
    if(currentQuestion < dietData.length) {
        setQuiz();
    } else {

      if(score <= 3) {
        quiz_section.innerHTML =         
          `
                <h2>${score}/${dietData.length}</h2>
                <h1>You need diet 1. </h1>
            `;
      } else if (score > 3 && score <= 7){
        quiz_section.innerHTML =         
          `
                <h2>${score}/${dietData.length}</h2>
                <h1>You need diet 2. </h1>
            `;
      } else 
      quiz_section.innerHTML =         
          `
                <h2>${score}/${dietData.length}</h2>

                <h1>You need diet 3. </h1>
            `;
    }
    }
  }); 







