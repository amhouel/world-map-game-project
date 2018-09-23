
window.onload = function () {
    const countries = [
        { name: 'Albania', flag: 'flags-big/al.png' },
        { name: 'Andorra', flag: 'flags-big/ad.png'},
        { name: 'The United Arab Emirates', flag: 'flags-big/ae.png'},
        { name: 'Afghanistan', flag: 'flags-big/af.png'},
        { name: 'Antigua and Barbuda', flag: 'flags-big/ag.png' },
        { name: 'Angola', flag: 'flags-big/ao.png' },
        { name: 'Austria', flag: 'flags-big/at.png' },
        { name: 'Australia', flag: 'flags-big/au.png' },
        { name: 'Armenia', flag: 'flags-big/am.png' },
        { name: 'Argentina', flag: 'flags-big/ar.png' },
        { name: 'Azerbaijan', flag: 'flags-big/az.png' },
        { name: 'Bosnia and Herzegovina', flag: 'flags-big/ba.png' },
        { name: 'Barbados', flag: 'flags-big/bb.png' },
        { name: 'Bangladesh', flag: 'flags-big/bd.png' },
        { name: 'Belgium', flag: 'flags-big/be.png' },
        { name: 'Burkina Faso', flag: 'flags-big/bf.png' },
        { name: 'Bulgaria', flag: 'flags-big/bg.png' },
        { name: 'Bahrain', flag: 'flags-big/bh.png' },
        { name: 'Burundi', flag: 'flags-big/bi.png' },
        { name: 'Benin', flag: 'flags-big/bj.png' },
        { name: 'Brunei Darussalam', flag: 'flags-big/bn.png' },
        { name: 'Bolivia', flag: 'flags-big/bo.png' },
        { name: 'Brazil', flag: 'flags-big/br.png' },
        { name: 'Bahamas', flag: 'flags-big/bs.png' },
        { name: 'Bhutan', flag: 'flags-big/bt.png' },
        { name: 'Botswana', flag: 'flags-big/bw.png' },
        { name: 'Belarus', flag: 'flags-big/by.png' },
        { name: 'Belize', flag: 'flags-big/bz.png' },
        { name: 'Canada', flag: 'flags-big/ca.png' },
        { name: 'The Democratic Republic of Congo', flag: 'flags-big/cd.png' },
        { name: 'The Central African Republic', flag: 'flags-big/cf.png' },
        { name: 'The Republic of Congo', flag: 'flags-big/cg.png' },
        { name: 'Chile', flag: 'flags-big/cl.png' },
        { name: 'China', flag: 'flags-big/cn.png' },
        { name: 'Switzerland', flag: 'flags-big/ch.png' },
        { name: 'The Ivory Coast', flag: 'flags-big/ci.png' },
        { name: 'Cameroon', flag: 'flags-big/cm.png' },
        { name: 'Colombia', flag: 'flags-big/co.png' },
        { name: 'Costa Rica', flag: 'flags-big/cr.png' },
        { name: 'Cuba', flag: 'flags-big/cu.png' },
        { name: 'Cape Verde', flag: 'flags-big/cv.png' },
        { name: 'Cyprus', flag: 'flags-big/cy.png' },
        { name: 'The Czech Republic', flag: 'flags-big/cz.png' },
        { name: 'Germany', flag: 'flags-big/de.png' },
        { name: 'Djibouti', flag: 'flags-big/dj.png' },
        { name: 'Denmark', flag: 'flags-big/dk.png' },
        { name: 'Dominica', flag: 'flags-big/dm.png' },
        { name: 'The Dominican Republic', flag: 'flags-big/do.png' },
        { name: 'Algeria', flag: 'flags-big/dz.png', },
        { name: 'Ecuador', flag: 'flags-big/ec.png' },
        { name: 'Estonia', flag: 'flags-big/ee.png' },
        { name: 'Egypt', flag: 'flags-big/eg.png' },
        { name: 'Western Sahara', flag: 'flags-big/eh.png' },
        { name: 'Eritrea', flag: 'flags-big/er.png' },
        { name: 'Spain', flag: 'flags-big/es.png' },
        { name: 'Ethiopia', flag: 'flags-big/et.png' },
        { name: 'Finland', flag: 'flags-big/fi.png' },
        { name: 'Fiji', flag: 'flags-big/fj.png' },
        { name: 'The Federated States of Micronesia', flag: 'flags-big/fm.png' },
        { name: 'France', flag: 'flags-big/fr.png' },
        { name: 'Gabon', flag: 'flags-big/ga.png' },
        { name: 'The United Kingdom', flag: 'flags-big/gb.png' },
        { name: 'Grenada', flag: 'flags-big/gd.png' },
        { name: 'Georgia', flag: 'flags-big/ge.png' },
        { name: 'Ghana', flag: 'flags-big/gh.png' },
        { name: 'Greenland', flag: 'flags-big/gl.png' },
        { name: 'Gambia', flag: 'flags-big/gm.png' },
        { name: 'Guinea', flag: 'flags-big/gn.png' },
        { name: 'Equatorial Guinea', flag: 'flags-big/gq.png' },
        { name: 'Greece', flag: 'flags-big/gr.png' },
        { name: 'Guatemala', flag: 'flags-big/gt.png' },
        { name: 'Guinea-Bissau', flag: 'flags-big/gw.png' },
        { name: 'Guyana', flag: 'flags-big/gy.png' },
        { name: 'Iceland', flag: 'flags-big/is.png' },
        { name: 'India', flag: 'flags-big/in.png' },
        { name: 'Italy', flag: 'flags-big/it.png' },
        { name: 'Ireland', flag: 'flags-big/ie.png' },
        { name: 'Israel', flag: 'flags-big/il.png' },
        { name: 'Jamaica', flag: 'flags-big/jm.png' },
        { name: 'Japan', flag: 'flags-big/jp.png' },
        { name: 'South Korea', flag: 'flags-big/kr.png' },
        { name: 'Mexico', flag: 'flags-big/mx.png' },
        { name: 'The Netherlands', flag: 'flags-big/nl.png' },
        { name: 'New Zealand', flag: 'flags-big/nz.png' },
        { name: 'Norway', flag: 'flags-big/no.png' },
        { name: 'Peru', flag: 'flags-big/pe.png' },
        { name: 'Portugal', flag: 'flags-big/pt.png' },
        { name: 'Romania', flag: 'flags-big/ro.png' },
        { name: 'Russia', flag: 'flags-big/ru.png' },
        { name: 'South Africa', flag: 'flags-big/za.png' },
        { name: 'Sweden', flag: 'flags-big/se.png' },
        { name: 'Thailand', flag: 'flags-big/th.png' },
        { name: 'Turkey', flag: 'flags-big/tr.png' },
        { name: 'The United-States', flag: 'flags-big/us.png' },
        { name: 'Vietnam', flag: 'flags-big/vn.png' },
    ];

    const countryFillingColors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];

    const countryPaths = document.querySelectorAll('.land');
    const correctAnswerAudio = document.querySelector('.correct-answer');
    const wrongAnswerAudio = document.querySelector('.wrong-answer');
    const loserAudio = document.querySelector('.loser');
    const winnerAudio = document.querySelector('.winner');

    let game;
    let scoreBoardDiv;
    let scoreDisplayP;
    let countryToFindH1;
    let flagToGuessDiv;
    let flagImg;
    let countryPath;
    let countryColor;
    let randomIndex;
    let randomCountry;
    let randomCountryIndex;
    let randomCountryFlag;
    let randomCountryName;
    let feedback;
    let resetButton;
    let nextCountryButton;
    let worldMapCountries;
    let countryTitle;
    let usedIndexes = [];
    let countryCount = 1;
    let attemptCount = 0;
    let player = null;

    function pickRandomIndex(arr) {
        randomIndex = Math.floor(Math.random() * arr.length);
        return randomIndex;
    }

    function pickRandomCountryColor() {
        for (let i = 0; i < countryPaths.length; i++) {
            pickRandomIndex(countryFillingColors);
            countryColor = countryFillingColors[randomIndex];
            countryPath = countryPaths[i];
            countryPath.classList.add(`${countryColor}`);
        }
    }

    function startGame(evt) {
        game = document.querySelector('.game');
        if (evt.target.getAttribute('id') === 'level-1') {
            game.classList.add('level-1');
        } else if (evt.target.getAttribute('id') === 'level-2') {
            game.classList.add('level-2');
        }
        document.querySelector('.feedback-score').classList.add('play');
        setUpGame();
        playGame();
    }

    function setUpGame() {
        document.querySelector('.game-levels').style.display = 'none';
        feedbackMessage('');
        countryToFindH1 = document.createElement('h1');
        countryToFindH1.classList.add('country-to-find');
        feedback = document.querySelector('.feedback')
        feedback.appendChild(countryToFindH1);
        feedback.insertBefore(countryToFindH1, feedback.childNodes[0]);
        setUpScoreBoard();
        showRandomFlag();
        pickRandomCountryColor();
        updateScoreDisplay();
    }

    function setUpScoreBoard() {
        scoreBoardDiv = document.createElement('div');
        scoreBoardDiv.classList.add('score-board');
        document.querySelector('.feedback-score').appendChild(scoreBoardDiv);
        scoreDisplayP = document.createElement('p');
        scoreDisplayP.classList.add('score-board-text');
        document.querySelector('.score-board').appendChild(scoreDisplayP);
    }

    function setUpFlag() {
        flagToGuessDiv = document.createElement('div');
        flagToGuessDiv.classList.add('flag-to-guess');
        document.querySelector('.feedback-score').appendChild(flagToGuessDiv);
        flagImg = document.createElement('img');
        flagImg.classList.add('flag');
        flagToGuessDiv = document.querySelector('.flag-to-guess');
        flagToGuessDiv.appendChild(flagImg);
    }

    function showRandomFlag() {
        setUpFlag();
        pickRandomIndex(countries);
        if (usedIndexes.length === 0 || usedIndexes.indexOf(randomIndex) === -1) {
            randomCountryIndex = randomIndex;
            usedIndexes.push(randomCountryIndex);
        } else {
            while (usedIndexes.indexOf(randomIndex) >= 0) {
                pickRandomIndex(countries);
            }
            randomCountryIndex = randomIndex;
            usedIndexes.push(randomCountryIndex);
        }
        randomCountry = countries[randomCountryIndex];
        randomCountryFlag = randomCountry.flag;
        randomCountryName = randomCountry.name;
        flagImg.setAttribute('src', randomCountryFlag);
        game = document.querySelector('.game');
        if (game.getAttribute('class') === 'game level-1') {
            document.querySelector('.country-to-find').innerHTML = `Find ${randomCountryName} On The Map!`;
        }
        if (game.getAttribute('class') === 'game level-2') {
            document.querySelector('.country-to-find').innerHTML = 'Find the Country This Flag belongs to!';
        }
    }

    function playGame() {
        document.querySelector('.game-levels').removeEventListener('click', startGame);
        worldMapCountries = document.querySelector('.world-map-countries');
        worldMapCountries.addEventListener('click', handleCountryClick);
    }

    function handleCountryClick(evt) {
        if (!evt.target.getAttribute('data-clicked')) {
            attemptCount++;
            updateScoreDisplay();
            countryTitle = evt.target.getAttribute('title');
            randomCountryName = randomCountry.name;
            if (countryTitle.toLowerCase() === randomCountryName.toLowerCase()) {
                worldMapCountries.removeEventListener('click', handleCountryClick);
                evt.target.setAttribute('data-clicked', 'yes');
                evt.target.classList.add('correct');
                evt.target.style.transition = 'all .5s';
                if (countryCount < 10) {
                    correctAnswerAudio.play();
                    feedbackMessage(`You found ${randomCountryName}! Bravo!!`);
                    document.querySelector('.feedback-message').style.animation = 'correctAnswerAnimation 0.2s linear infinite alternate';
                    player = 'winner';
                } else if (countryCount === 10) {
                    winnerAudio.play();
                    document.querySelector('.feedback-score').classList.add('game-over');
                    document.querySelector('.country-to-find').innerHTML = '10/10! You\'re a real World Map Master!!!';
                    document.querySelector('.country-to-find').style.animation = 'winnerAnimation 0.2s linear infinite alternate';
                    feedbackMessage('');
                    document.querySelector('.feedback-message').style.animation = 'none';
                    createResetButton();
                }
            } else {
                evt.target.setAttribute('data-clicked', 'yes');
                evt.target.classList.add('wrong');
                evt.target.style.transition = 'all .5s';
                if (attemptCount === 2) {
                    feedbackMessage('Last Chance To Find it!');
                    document.querySelector('.feedback-message').style.animation = 'wrongAnswerAnimation 0.2s linear infinite alternate';
                    wrongAnswerAudio.play();
                } else if (attemptCount === 3) {
                    player = 'loser';
                    feedbackMessage('');
                    document.querySelector('.feedback-message').style.animation = 'none';
                    document.querySelector('.country-to-find').innerHTML = 'Game Over!';
                    document.querySelector('.country-to-find').style.animation = 'wrongAnswerAnimation 0.2s linear infinite alternate';
                    document.querySelector('.feedback-score').classList.add('game-over');
                    loserAudio.play();
                } else {
                    feedbackMessage('No, that\'s not it. Look Again!');
                    document.querySelector('.feedback-message').style.animation = 'wrongAnswerAnimation 0.2s linear infinite alternate';
                    wrongAnswerAudio.play();
                }
            }
        }
        if (player === 'loser') {
            createResetButton();
        }
        if (player === 'winner') {
            createNextCountryButton();
        }
    }

    function feedbackMessage(message) {
        feedback = document.querySelector('.feedback-message');
        feedback.innerHTML = message;
    }

    function updateScoreDisplay() {
        document.querySelector('.score-board-text').innerHTML = `Country# ${countryCount}/10 \n Attempt# ${attemptCount}/3`;
    }

    function createResetButton() {
        resetButton = document.createElement('button');
        resetButton.classList.add('reset', 'pointer');
        resetButton.innerHTML = 'New Game';
        document.querySelector('.feedback').appendChild(resetButton);
        resetButton.addEventListener('click', reset);
        worldMapCountries.removeEventListener('click', handleCountryClick);
    }

    function createNextCountryButton() {
        nextCountryButton = document.createElement('button');
        nextCountryButton.classList.add('nextCountry', 'pointer');
        nextCountryButton.innerHTML = 'Next Country';
        document.querySelector('.feedback').appendChild(nextCountryButton);
        nextCountryButton.addEventListener('click', nextCountry);
    }

    function reset() {
        document.querySelector('.game-levels').addEventListener('click', startGame);
        player = null;
        attemptCount = 0;
        countryCount = 1;
        resetCountryAttributes();
        usedIndexes.splice(0);
        feedbackMessage('Choose \'Level 1\' or \'Level 2\' to start playing!');
        document.querySelector('.country-to-find').innerHTML = '';
        document.querySelector('.country-to-find').style.display = 'none';
        document.querySelector('.country-to-find').style.animation = 'none';
        document.querySelector('.game-levels').style.display = 'flex';
        document.querySelector('.game').setAttribute('class', 'game');
        document.querySelector('.score-board').removeChild(scoreDisplayP);
        document.querySelector('.feedback-score').removeChild(flagToGuessDiv);
        document.querySelector('.feedback-score').removeChild(scoreBoardDiv);
        document.querySelector('.feedback').removeChild(resetButton);
        for (let i = 0; i < countryPaths.length; i++) {
            countryPaths[i].setAttribute('class', 'land');
        }
        document.querySelector('.feedback-score').classList.remove('play');
    }

    function nextCountry() {
        attemptCount = 0;
        countryCount++;
        player = null;
        updateScoreDisplay();
        resetCountryAttributes();
        feedbackMessage('');
        document.querySelector('.feedback-message').style.animation = 'none';
        document.querySelector('.feedback-score').removeChild(flagToGuessDiv);
        document.querySelector('.feedback').removeChild(nextCountryButton);
        showRandomFlag();
        playGame();
    }

    function resetCountryAttributes() {
        const wrongAnswers = document.querySelectorAll('.wrong');
        const correctAnswers = document.querySelectorAll('.correct');
        if (wrongAnswers) {
            for (let i = 0; i < wrongAnswers.length; i++) {
                wrongAnswers[i].classList.remove('wrong');
                wrongAnswers[i].removeAttribute('data-clicked');
            }
        }
        if (correctAnswers) {
            for (let i = 0; i < correctAnswers.length; i++) {
                correctAnswers[i].classList.remove('correct');
                correctAnswers[i].removeAttribute('data-clicked');
            }
        }
        document.querySelector('.feedback-score').classList.remove('game-over');
    }

    document.querySelector('.game-levels').addEventListener('click', startGame);
}
