import { useState } from 'react'
import yasminImage from '../assets/images.png'
import '../styles/FirstPage.css'

const glyphFiles = import.meta.glob('../kween-font/*.png', {
  eager: true,
  import: 'default',
})

function getGlyph(letter) {
  return glyphFiles[`../kween-font/${letter.toUpperCase()}.png`]
}

export default function FirstPage() {
  const [text, setText] = useState('Kween Yasmin')
  const [alignment, setAlignment] = useState('left')

  return (
    <main className="font-page">
      <header className="font-header">
        <a className="brand" href="/">
         
          KWEEN YASMIN
        </a>

        <nav className="nav-links">
          <a href="#tester">Try It!</a>
          <a href="#about">About</a>
        </nav>

        <button className="nav-button" type="button">
          All-Purpose Kween
        </button>
      </header>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-image-box">
            <span className="image-note">THE KWEEN HERSELF</span>

            <img
              src={yasminImage}
              alt="Kween Yasmin"
              className="yasmin-image"
            />
          </div>

          <div className="hero-copy">
            <p className="intro">MAKE IT LOUD. MAKE IT CUTE.</p>

            <h1>
              Kween Yasmin<br />
              <span>Font Generator</span>
            </h1>

            <p className="description">
              Type anything below and see how it looks in your own little type
              world.
            </p>
          </div>
        </div>
      </section>

      <section className="tester-card" id="tester">
        <div className="tester-heading">
          <div>
            <p className="tester-kicker">TRY THE FONT</p>
            <h2>
              Type your<br />
              main character line.
            </h2>
          </div>

    
        </div>

        <label className="text-label" htmlFor="font-text">
          YOUR TEXT
        </label>

        <textarea
          id="font-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          rows={4}
        />

        <div className="alignment-controls">
          <button type="button" onClick={() => setAlignment('left')}>
            Left
          </button>

          <button type="button" onClick={() => setAlignment('center')}>
            Center
          </button>

          <button type="button" onClick={() => setAlignment('right')}>
            Right
          </button>

          <button type="button" onClick={() => setAlignment('justify')}>
            Justify
          </button>
        </div>

        <div className="preview-box">

          <div className="glyph-preview" aria-live="polite">
            {text ? (
              text.split('\n').map((line, lineIndex) => (
                <div
                  className={`glyph-line glyph-line--${alignment}`}
                  key={`line-${lineIndex}`}
                  style={{ '--glyph-count': Math.max([...line].length, 1) }}
                >
                  {line.length > 0 ? (
                    [...line].map((character, characterIndex) => {
                      if (character === ' ') {
                        return (
                          <span
                            className="glyph-space"
                            key={`space-${lineIndex}-${characterIndex}`}
                          />
                        )
                      }

                      const glyph = getGlyph(character)

                      return glyph ? (
                        <img
                          key={`glyph-${lineIndex}-${characterIndex}`}
                          src={glyph}
                          alt={character}
                          className="glyph"
                        />
                      ) : (
                        <span
                          className="missing-glyph"
                          key={`missing-${lineIndex}-${characterIndex}`}
                        >
                          {character}
                        </span>
                      )
                    })
                  ) : (
                    <span className="blank-line" />
                  )}
                </div>
              ))
            ) : (
              <span className="empty-preview">
               
              </span>
            )}
          </div>
        </div>
      </section>

      <footer id="about">
        <span>DESIGNED FOR BIG FEELINGS</span>
        <span>© 2026</span>
      </footer>
    </main>
  )
}