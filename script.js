const adviceId = document.querySelector(".adviceId");
const advice = document.querySelector(".advice")
const next = document.querySelector(".next .cover");

const populateUI = async () => {
  let objc = await fetch("https://api.adviceslip.com/advice");
  let adviceJs = await objc.json();
  adviceId.innerHTML = "ADVICE #"+ adviceJs.slip.id
  advice.innerHTML = "<q>"+adviceJs.slip.advice+"</q>"
};

const handleNext = (e) => {
    document.querySelector(".cover img").classList.add("spin")
    document.querySelector(".cover").classList.add("glow")
    populateUI()
    setTimeout(() => {
        document.querySelector(".cover img").classList.remove("spin")
        document.querySelector(".cover").classList.remove("glow")
    }, 1000);
}

// Event Listners
next.addEventListener("click", handleNext);

populateUI();
