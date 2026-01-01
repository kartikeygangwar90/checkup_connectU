import React from 'react'
import { useRef } from 'react'
import './style.css'

const Home = () => {

  const howItWorkRef = useRef(null);
  const scrollHowItWorks = () => {
    howItWorkRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const words = ["Connect","Collborate", "Create", "Explore"];

  const [typedWord, setTypedWord] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharindex]  = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  React.useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if(!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setTypedWord(currentWord.slice(0, charIndex+1))
        setCharindex(charIndex+1);
      }, 120)
    }
    else if(isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedWord(currentWord.slice(0, charIndex - 1));
        setCharindex(charIndex-1);
      }, 80);
    }
    else{
      timeout = setTimeout(() => {
        if(!isDeleting) setIsDeleting(true);
        else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 800)
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className='connectU--m'>
      <div className="nav--bar">
        <img src="./src/assets/connectU_logo.png" alt="logo" className='main--logo' />
        <a href='#' className='Home--btn'>Home</a>
        <button onClick={scrollHowItWorks} className='btn--howItWorks'>How It Works ?</button>
      </div>
      <section className='section--home'>
        <div className="logo--section">
          <h1 className='connectu--heading'>
            connect<span>U</span>
          </h1>
          <h3>"Build Better Teams for Every Event"</h3>
        </div>
        <div className="description">
          <h3>Build Your Dream Team for College Competitions</h3>
          <h3>Find the right Teammates with matching skills, interests and Experience .</h3>
        </div>
        <button className='getStarted--btn'>Get Started</button>
      </section>
      <section className='web--description'>
        <p className='intro--text'>We help you to </p>

        <h2 className='typing--line'>
          {/* <span className='static-text'>Connect ,</span> */}
          <span className='dynamic--text'>{typedWord}</span>
          <span className='cursor--typing'>|</span>
        </h2>

        <p className='desc--para'>
          <strong>Many</strong> college students <strong>miss out</strong> on competitions and events not because of lack of talent, but due to <strong>limited awareness</strong>, difficulty in finding the right teammates, and lack of direct access to seniors or event organizers.<br></br>
          <strong>connectU</strong> is built to solve this problem by acting as a <strong>one-stop platform</strong> where students can discover upcoming college events, <strong>find or form teams</strong> based on skills and interests, and <strong>communicate</strong> directly with teammates and seniors for quick guidance. By bringing opportunities, <strong>collaboration</strong>, and mentorship into a single space, connectU helps students participate <strong>with</strong> confidence and clarity.
        </p>
        <h4 className='conclusion'>connectU connects students, ideas, and opportunities—so no ambition goes unheard or unsupported.</h4>
      </section>
      <section className='section--howItWorks' ref={howItWorkRef}>
        <h2>How it works !!</h2>
      </section>

    </div>
  )
}

export default Home