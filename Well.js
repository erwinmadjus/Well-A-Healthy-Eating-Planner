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
    }
  //https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626
  ];

  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const theQuestion = document.getElementById("question");
  const choice_a = document.getElementById('choice_a');
  const choice_b = document.getElementById('choice_b');
  const choice_c = document.getElementById('choice_c');
  const choice_d = document.getElementById('choice_d');
  const nextButton = document.getElementById("next");

  let currentQuestion = 0; // Initialized the question counter to change from one to question to the next
  let score = 0;  // Initialized the Score counter 

  setQuiz();

  function setQuiz() {
    const currentQuestionSet = quizSet[currentQuestion];
    
    theQuestion.innerText = currentQuestionSet.question;
    choice_a.innerText = currentQuestionSet.a;
    choice_b.innerText = currentQuestionSet.b;
    choice_c.innerText = currentQuestionSet.c;
    choice_d.innerText = currentQuestionSet.d;

    currentQuestion++;
  }

    




