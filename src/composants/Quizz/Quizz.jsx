import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "Qui est le père de tous les dieux nordiques ?",
      options: ["Thor", "Loki", "Odin", "Freyr"],
      answer: "Odin",
    },
    {
      question: "Quel monde est considéré comme le monde des humains ?",
      options: ["Asgard", "Midgard", "Jotunheim", "Niflheim"],
      answer: "Midgard",
    },
    {
      question: "Quel est le nom du marteau de Thor ?",
      options: ["Mjöllnir", "Gungnir", "Draupnir", "Skidbladnir"],
      answer: "Mjöllnir",
    },
    {
      question:
        "Quelle pratique magique était souvent associée aux femmes dans la mythologie nordique ?",
      options: ["Seiðr", "Galdr", "Runic Magic", "Shamanism"],
      answer: "Seiðr",
    },
    {
      question:
        "Dans quelle ville moderne ont été découverts le navire d'Oseberg et le navire de Gokstad ?",
      options: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
      answer: "Oslo",
    },
    {
      question:
        "Quel jeu vidéo plonge les joueurs dans le rôle d'un guerrier viking explorant l'Angleterre anglo-saxonne ?",
      options: [
        "Assassin’s Creed Valhalla",
        "Skyrim",
        "God of War",
        "The Witcher 3",
      ],
      answer: "Assassin’s Creed Valhalla",
    },
    {
      question:
        "Comment s'appelle le pont arc-en-ciel reliant Midgard à Asgard ?",
      options: ["Bifröst", "Gjallarbrú", "Heimdall's Bridge", "Asgard Way"],
      answer: "Bifröst",
    },
    {
      question: "Qui est le dieu de la ruse et des malices ?",
      options: ["Loki", "Odin", "Thor", "Heimdall"],
      answer: "Loki",
    },
    {
      question: "Quel est le nom de la demeure des morts gouvernée par Hel ?",
      options: ["Valhalla", "Helheim", "Fólkvangr", "Niflheim"],
      answer: "Helheim",
    },
    {
      question:
        "Pour quel artéfact Odin a t'il du sacrifié son oeil pour l'aquérir ?",
      options: [
        "La sagesse",
        "Les runes",
        "Le marteau de Thor",
        "L'immortalité",
      ],
      answer: "La sagesse",
    },
    {
      question:
        "Quel animal représente souvent Freyja, la déesse de l'amour et de la beauté ?",
      options: ["Le chat", "Le loup", "Le faucon", "Le cheval"],
      answer: "Le chat",
    },
    {
      question:
        "Quelle série télévisée explore la vie et les légendes des Vikings ?",
      options: ["Game of Thrones", "Vikings", "The Last Kingdom", "Norsemen"],
      answer: "Vikings",
    },
    {
      question: "Dans quel monde se trouve l'arbre Yggdrasil ?",
      options: [
        "Il connecte tous les mondes",
        "Asgard",
        "Midgard",
        "Jotunheim",
      ],
      answer: "Il connecte tous les mondes",
    },
    {
      question: "Quelle fête nordique est à l'origine de Noël ?",
      options: ["Yule", "Midsummer", "Easter", "Samhain"],
      answer: "Yule",
    },
    {
      question:
        "Qui a écrit une version moderne des mythes nordiques pour le public contemporain ?",
      options: ["J.R.R. Tolkien", "C.S. Lewis", "Neil Gaiman", "Rick Riordan"],
      answer: "Neil Gaiman",
    },
    {
      question: "Quelle rune est souvent associée à la protection ?",
      options: ["Algiz", "Fehu", "Ansuz", "Berkano"],
      answer: "Algiz",
    },
    {
      question:
        "Quel type de bateau les Vikings utilisaient-ils pour leurs expéditions ?",
      options: ["Knarr", "Drakkar", "Longship", "Snekkja"],
      answer: "Drakkar",
    },
    {
      question:
        "Quel dieu nordique a donné son nom au jour de la semaine 'Wednesday' (Mercredi) en anglais ?",
      options: ["Odin", "Thor", "Freyr", "Loki"],
      answer: "Odin",
    },
    {
      question:
        "Quelle est la fin du monde dans la mythologie nordique, marquée par une grande bataille ?",
      options: ["Ragnarök", "Armageddon", "Doomsday", "Apocalypse"],
      answer: "Ragnarök",
    },
    {
      question:
        "Quel jeu vidéo représente une interprétation de la mythologie nordique avec Kratos et son fils ?",
      options: ["God of War", "Dark Souls", "Elder Scrolls", "Bloodborne"],
      answer: "God of War",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer("");
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quizz" id="quizz">
      <h1>Testez Vos Connaissances sur la Mythologie Nordique</h1>
      <div className="quizz-container">
        {showScore ? (
          <div className="quizz-score">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div>
            <div className="quizz-question">
              {questions[currentQuestion].question}
            </div>
            <div className="quizz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
