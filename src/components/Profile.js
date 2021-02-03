import React from "react";
import styled from "styled-components";
import { Contentdiv, TitleDiv, Row, Col } from "./styles/commonstyle";

const TextBox = styled.div`
  box-sizing: border-box;
  margin: 0 p {
    overflow-wrap: break-word;
    font-size: 14px;
    line-height: 1.6;
    padding: 0;

    box-sizing: border-box;
  }
`;

const InfoList = styled.div`
  box-sizing: border-box;

  ul {
    list-style: none;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;

    li {
      display: inline-block;
      width: 48%;
      line-height: 1.6;
      font-size:12px strong {
        display: inline-block;
        font-size: 12px;
        color: #171717;
        font-weight: 550;
        text-transform: uppercase;
      }
    }
  }
`;

const MediaRow = styled.div`
  margin: 0 10px;
  position: relative;
  &::before {

    
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );


   @media (max-width:1024px){
      background:none;
    }
  }

  &::after {
    margin: 0 0 0 -1px;
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );

    @media (max-width:1024px){
      background:none;
    }
  }
`;

const MediaCol = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
  padding: 20px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  box-sizing: border-box;

@media (max-width: 1024px) {
       background:none;
       padding: 0px;
     }


  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );


     @media (max-width: 1024px) {
       background:none;

     }
  }
`;

const SkillItemDiv = styled.div`
  text-align: left;


  
`;

const SkillItemName = styled.div`
  margin: 15px 0 10px 0;
  font-size: 12px;
  color: #171717;
  font-weight: 550;
  text-transform: uppercase;
  p {
    font-size: 14px;
    line-height: 1.6;
    padding: 0;
    font-weight: 500;
    text-transform: none;
  }


  
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.loadingContainer = React.createRef();
  }

  componentDidMount() {
    this.loadingContainer.focus();
  }

  render() {
    return (
      <React.Fragment>
        <Contentdiv
          ref={loadingContainer => {
            this.loadingContainer = loadingContainer;
          }}
        >
          <TitleDiv>Profile</TitleDiv>
          <Row>
            <Col>
              <TextBox>
                <strong> A propos de moi : </strong>
                <p>
                Actuellement administrateur système et réseau pour la Direction Générale de l'Armement dans le 94, et ayant validé un BTS SIO - SLAM à Toulon (83), 
                j'ai toujours été intéressé par l'informatique, la cybersecurité, le Web et la programmation. 
                Ce portfolio existe dans le but de représenter mon cursus scolaire ainsi que mes projets et mes compétences.
                </p>
              </TextBox>

              <InfoList>
                <ul>
                  <li>
                    <strong>Age : </strong> 23
                  </li>
                  <li>
                    <strong>Languages : </strong>  French, English, Spanish
                  </li>
                  <li>
                    <strong>Email : </strong> timothe8833@gmail.com
                  </li>                  
                  <li>
                    <strong>Address: </strong> Arcueil 94, IDF, France
                  </li>
                </ul>
              </InfoList>
            </Col>
          </Row>
        </Contentdiv>
        <Contentdiv>
          <TitleDiv>Skills</TitleDiv>
          <MediaRow>
            <MediaCol>
              <SkillItemDiv>
                <SkillItemName>
                  Administrateur Système et réseau
                  <p>
                    Gère & administre les Système d'Information garantissant productivité et ergonomie de travail.
                  </p>
                </SkillItemName>
              </SkillItemDiv>

              <SkillItemDiv>
                <SkillItemName>
                  Audit & Cybersécurité
                  <p>
                    Application de patch de sécurité sur SI Séc Déf, mise en place de solution de sécurité physique & virtuelle ( Station Blanche, antivirus et Firewall ).
                  </p>
                </SkillItemName>
              </SkillItemDiv>
            </MediaCol>

            <MediaCol>
              <SkillItemDiv>
                <SkillItemName>
                  Virtualisation et monitoring
                  <p>
                    Virtualisation de serveur, d'environnement de travail à distance et de service avec Docker, Hyper-V & VMWare.
                  </p>
                </SkillItemName>
              </SkillItemDiv>

              <SkillItemDiv>
                <SkillItemName>
                  Automatisation de process et scripting
                  <p>Automatisation de sauvegarde, de deploiement de configuration et de création de profil.</p>
                </SkillItemName>
              </SkillItemDiv>
            </MediaCol>
          </MediaRow>
        </Contentdiv>
      </React.Fragment>
    );
  }
}

export default Profile;
