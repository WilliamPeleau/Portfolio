import React from 'react'
import './Education.css'
function Education() {
  return (
    <>
      <h1 className='text-light text-center'>Mon parcours scolaire</h1>
      <p className='text-light text-center'>J'ai commence par un Lycée en STI2D qui ma permit de faire un peu d'informatique. 
        Sa à comfirmer mon envie de faire du développement. 
        Après j'ai fais un DUT informatique à La Rochelle IUT.
        J'ai appris de nombeaux langages C++, JavaScript, React, PHP, Symfony, HTML, CSS, PL/SQL.
        Dans la formation je n'est pas appris que les langages mais aussi la gestion projet
        avec la création dun backlog projet, de l'analyse d'un cahier des charges, de la création de
        diagramme (cas d'utilisation, de séquence, de classe) et le travaille d'équipe avec la méthode SCRUM.
        Je suis en recherche d'une alternance pour la 3W Academy
        </p>
      <ul class="timeline">
        <li>
          <div class="timeline-badge">1</div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Lycée Marcel D'assault</h4>
            </div>
            <div class="timeline-body">
              <p>Bac STI2D (sciences et technologies de l'industrie et du développement durable)</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge">2</div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">La Rochelle IUT</h4>
            </div>
            <div class="timeline-body">
              <p>Bac+2 DUT Informatique</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge">3</div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">3W Academy</h4>
            </div>
            <div class="timeline-body">
              <p>Bac+3 Développeur Full-Stack en alternance (en recherche pour cette formation)</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Education