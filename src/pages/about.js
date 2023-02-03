import '../css/about.css'
export default function About(){
    return(
        <>
        <div className="about-section">
        <div className="inner-width">
          <h1>About Us</h1>
          <div className="border"></div>
          <div className="about-section-row">
            <div className="about-section-col">
              <div className="about">
                <p>
                  I am J3udy and I am a web Develpor,i'm trying my best to be better than i am now
                </p>
                <a href="/">web Developer</a>
              </div>
            </div>
            <div className="about-section-col">
              <div className="skills">
                <div className="skill">
                  <div className="title">Web Develpor</div>
                  <div className="progress">
                    <div className="progress-bar p1"><span>70%</span></div>
                  </div>
                </div>
 
                <div className="skill">
                  <div className="title">UI Design</div>
                  <div className="progress">
                    <div className="progress-bar p2"><span>40%</span></div>
                  </div>
                </div>
 
                <div className="skill">
                  <div className="title">UX Design</div>
                  <div className="progress">
                    <div className="progress-bar p3"><span>50%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </>
    )
}