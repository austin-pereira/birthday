const greetingsDivs = document.querySelectorAll('.greetings div');
const letterDelay = 0.1; // Delay between each letter glow (in seconds)
const wordDelay = 1.0; // Delay between each word glow (in seconds)

greetingsDivs.forEach((div, divIndex) => {
    const letters = div.textContent.split('');
    div.textContent = '';

    letters.forEach((letter, letterIndex) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${letterIndex * letterDelay}s`; // Delay only by letter
        div.appendChild(span);
    });

    setTimeout(() => {
        div.classList.add('all-glow'); // Add glow class to the whole word
    }, (divIndex * wordDelay + letters.length * letterDelay) * 1000); // Delay by word and total letter glow time
});