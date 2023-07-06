import React from 'react'
import './Home.css'
function Home() {
  return (
    <>
        
        <h1 className='text-light text-center'>Présentation du profit de William Peleau</h1>
            <h2 className='text-light text-center'>Parcours</h2>
            <p className=' text-light text-center'>Je m'appelle William peleau j'ai 22ans et ce qui me caractérise c'est ma capacité de travaille en équipe. <br/>
                Qaund j'étais au collége j'ai voulue devenir développeur j'ai donc entrepris de faire un bac STI2D avec pour spécialisation l'informatique.
                Cette première expérience ma permit de confirmer mon envie de faire du développement ce que la suite de mon parcours comfirmera encore. <br/>
                suite à cette formation je me lance dans un DUT informatique (ba+2) que je réussirais. <br/>
                 Je n'aurais malheureument pas autant de succée pour trouver un emplois suite à ma formation ce qui ma pose à rejoindre la 3W Academy pour faire une alternance pour avoir une expéricence professionnel à montre
                à mes futur employeur voire être pris par mon entreprise d'alternance
            </p>

        <div className="card-group">
            <div className="card">
                <div className="card-body text-light">
                <h4 className="card-title">Langages et framework</h4>
                <p className="card-text">CSS, HTML, C++, JavaScript, React JS, PHP, Symfony, API Platform, PL/SQL.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-light">
                <h4 className="card-title">savoir-être</h4>
                <p className="card-text">Travail équipe, écouter, autonomie, curiosité et organisation.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-light">
                <h4 className="card-title">Logiciels</h4>
                <p className="card-text">Docker, Git.</p>
                </div>
            </div>
        </div>

    </>
    
  )
}

export default Home