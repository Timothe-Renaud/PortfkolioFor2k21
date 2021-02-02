import React from "react";
import { Contentdiv, TitleDiv, Row, Col, TextBox } from "./styles/commonstyle";

const Experience = () => {
  return (
    <React.Fragment>
      <Contentdiv>
        <TitleDiv>Experience</TitleDiv>
        <Row>
          <Col>
            <TextBox>
              <strong>Centre d'analise Technico - Opérationnel de défense - DGA</strong>
              <p>
                Affecté au CATOD en 2019 suite à l'obtention d'un concour d'etat et d'un BTS SIO (Service Informatique au Organisation), j'y éffectue des tâches d'administration de SI, d'automatisation de tâches, du dépannage utilisateurs.
                Mais aussi des audits de sécurité ( matériel & logiciel) du teste de monté en charge, de la Virtualisation de serveurs et de services. 
              </p>
            </TextBox>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <TextBox>
              <strong>Stage Devellopement DIRISI - Fort L'amalgue Toulon ( 83 )</strong>
              <p>
              Integration dans une equipe de developpeur web au Fort Lamalgue de  Toulon.
              Le but etant la mutualisation de service sur une solution de gestion des ressources humaines dans la cadre d'embarquement sur batiment naval de protection dela nation.<br></br>
              <q>Stage de validation de 2eme année de BTS SIO. </q><br></br>
              </p>
            </TextBox>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextBox>
              <strong>Stage Devellopement Progetech - La Farlette ( 83 )</strong>
              <p>
              Création et déploiement d'un nouveau site vitrine pour l'entreprise Progetech et remise à niveau concernant les couches infrastructure système et réseau ainsi que droit virtuel. <br></br>
              <q>Stage de validation de 1ere année de BTS SIO.</q><br></br>
              </p>
            </TextBox>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextBox>
              <strong>Stage Devellopement  - Lycée Génaral & technique Paul Langevin, La Seyne sur Mer ( 83 ).</strong>
              <p>
              Devellopement d'un mini jeu video, projet de validation de Bac professionnel avec Unity. <br></br>
              <q>Stage de validation de 1ere année de BTS SIO.</q><br></br>
              </p>
            </TextBox>
          </Col>
        </Row>
      </Contentdiv>
    </React.Fragment>
  );
};

export default Experience;
