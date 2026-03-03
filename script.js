:root {
    --sage-green: #9CAF88;
    --olive-green: #6B8E23;
    --olive-dark: #556B2F;
    --white: #FFFFFF;
    --gold-accent: #C9A961;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    background: var(--olive-dark);
    color: var(--white);
}

header {
    position: fixed;
    width: 100%;
    padding: 1rem 2rem;
    text-align: center;
    z-index: 100;
}

.logo {
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;
    color: var(--gold-accent);
}

.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
}

.hero-content {
    max-width: 800px;
}

.pre-title {
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.names {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 6vw, 5rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.names span {
    font-family: 'Great Vibes', cursive;
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--gold-accent);
}

.divider {
    width: 100px;
    height: 2px;
    background: var(--gold-accent);
    margin: 1.5rem auto;
}

/* Countdown */
.countdown {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.countdown div {
    text-align: center;
}

.countdown span {
    display: block;
    font-size: 2rem;
    font-weight: bold;
}

.countdown small {
    font-size: 0.8rem;
    letter-spacing: 1px;
}

.date-display {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    margin-top: 1rem;
}
