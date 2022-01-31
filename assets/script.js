const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 8

// Linking text
playerLivesCount.textContent = playerLives;

// Generate the cards (array)
const getData = () => [
    { imgSrc: "./images/audioslave.jpeg", name: "audioslave" },
    { imgSrc: "./images/kids-see-ghosts.jpeg", name: "kids see ghosts" },
    { imgSrc: "./images/limp-bizkit.jpeg", name: "limp bizkit" },
    { imgSrc: "./images/outkast.jpeg", name: "outkast" },
    { imgSrc: "./images/rage.jpeg", name: "rage against the machine" },
    { imgSrc: "./images/the-cure.jpeg", name: "the cure" },
    { imgSrc: "./images/wu-tang.jpeg", name: "wu tang" },
    { imgSrc: "./images/linkin-park.jpeg", name: "linkin park" },
    { imgSrc: "./images/audioslave.jpeg", name: "audioslave" },
    { imgSrc: "./images/kids-see-ghosts.jpeg", name: "kids see ghosts" },
    { imgSrc: "./images/limp-bizkit.jpeg", name: "limp bizkit" },
    { imgSrc: "./images/outkast.jpeg", name: "outkast" },
    { imgSrc: "./images/rage.jpeg", name: "rage against the machine" },
    { imgSrc: "./images/the-cure.jpeg", name: "the cure" },
    { imgSrc: "./images/wu-tang.jpeg", name: "wu tang" },
    { imgSrc: "./images/linkin-park.jpeg", name: "linkin park" },
    
];

// Randomising function
const randomize = () => {
    const cardData = getData();
    
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    

};

// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    //Generate HTML
    cardData.forEach((item) => {
            const card = document.createElement("div");
            const face = document.createElement("img");
            const back = document.createElement("div");
            card.classList = "card";
            face.classList = "face";
            back.classList = "back";
            //attach info to cards
            face.src = item.imgSrc;
            //attach cards to the section const
            section.appendChild(card);
            card.appendChild(face);
            card.appendChild(back);

            card.addEventListener("click", (e) => {
                card.classList.toggle("toggleCard")
            })


        });
    
    

};

cardGenerator();


