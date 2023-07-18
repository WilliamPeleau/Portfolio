import React from 'react'

function Experience() {
  return (
    <>
      <h1 className='text-light text-center'>Mon expérience professionel</h1>
      <div className="card-group">
        <div className="card">
          <div className="card-body text-light">
          <h3 className="card-title">Stage en Développement Web - Création d'un Site Vitrine pour l'auto-entreprise "La Farandole de Lilie" Avril 2022 Juin 2022</h3>

          <h5 className="card-title">Description :</h5>
          <p className="card-text">
            Pendant ce stage, j'ai réalisé en totale autonomie la conception et le développement d'un site vitrine pour l'auto-entreprise "La Farandole de Lilie". 
            Le site a été construit à l'aide des technologies suivantes : React JS, API Platform et Symfony.
          </p>

          <h5 className="card-title">Fonctionnalités du site :</h5>
          <ul>
            <li>Présentation de l'entreprise "La Farandole de Lilie".</li>
            <li>Consultation des actualités de l'entreprise.</li>
            <li>Affichage des réalisations de l'entreprise.</li>
            <li>Formulaire de contact pour les visiteurs souhaitant contacter l'entreprise.</li>
          </ul>
          <h5 className="card-title">Gestion de projet :</h5>

          <p className="card-text">
            Dans le cadre du stage, j'ai également été chargé de la gestion du projet. J'ai utilisé les méthodes suivantes :
          </p>
          <ul>
            <li>Kanban pour organiser et suivre les tâches tout au long du processus de développement.</li>
            <li>Story mapping pour définir les fonctionnalités du site et leur priorité.</li>
            <li>Impact mapping pour identifier les objectifs et les impacts attendus du site</li>
            <li>Vision produit pour établir une vue d'ensemble claire des objectifs du projet.</li>
            <li>Plan de navigation pour concevoir une expérience utilisateur fluide et intuitive.</li>
            <li>Persona pour mieux comprendre les besoins et les attentes des utilisateurs cibles.</li>
          </ul>
          <p className="card-text">
            Ce stage m'a permis de développer mes compétences en développement web, 
            de renforcer ma capacité à travailler de manière autonome et de prendre en charge la gestion complète d'un projet de création de site web.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-light">
            <h3 className="card-title">Assistant polyvalent boucherie "Leclerc" Juin 2022 Août 2022</h3>
            <p className="card-text">
              En tant qu'assistant polyvalent au sein de la boucherie Leclerc, 
              j'ai été responsable d'une variété de tâches visant à assurer la satisfaction des clients et la qualité des produits proposés.<br/> 
              Mes principales responsabilités incluaient :
              <br/><br/>
              <ul>
                <li>Mise en barquette de produits et préparation soignée pour leur mise en vente.</li>
                <li>Préparation et marinade de diverses variétés de viande pour répondre aux besoins et préférences des clients.</li>
                <li>Confection de brochettes en veillant à présenter des produits attrayants et appétissants.</li>
                <li>Maîtrise des compétences de découpe pour produire de la viande hachée de haute qualité.</li>
                <li>Plonge pour maintenir la propreté et l'hygiène de l'espace de travail.</li>
              </ul>
              Pendant cette période, j'ai développé des compétences en matière de préparation alimentaire, de gestion du temps et du travail en équipe.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience