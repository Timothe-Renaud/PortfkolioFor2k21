import React from "react";
import { Contentdiv, TitleDiv, Row, Col, TextBox } from "./styles/commonstyle";

const Projects = () => {
  return (
    <React.Fragment>
      <Contentdiv>
        <TitleDiv>Projects</TitleDiv>
        <Row>
          <Col>
            <TextBox>
              <table>
                <thead>
                <tr>
                  <td class="col">
                    <strong>Nom</strong>
                  </td>
                  <td class="col">
                    <strong>Technologie</strong>
                  </td>
                  <td class="col">    </td>
                  </tr>
                  </thead>
                  <tbody class="">                
                  <tr>
                    <td> Algorithme PathFinder </td>
                    <td> JavaScript</td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/AStarz"> Link </a>
                  </td>
                  </tr>

                  <tr>
                    <td> Nolark </td>
                  <td> HTML & CSS - PHP - Mysql </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/Nolark-php"> Link </a>
                  </td>
                  </tr>

                  <tr>
                  <td> Galaxy Suisse Bourdin - scolaire  </td>
                  <td> PHP 7 - Model MVC - MySql </td>
                  <td> 
                    <a href="https://github.com/Alexandre-petitjean/GSB"> Link </a>
                  </td>
                  </tr>

                  <tr>
                  <td> Maison des Ligue de Lorraine </td>
                  <td> C# - WPF - MVVC </td>
                  <td> 
                    <a href="https://github.com/bricefriha/Maison-desLigues-WPF"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> Filter Pass Band </td>
                  <td> JavaScript </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/FilterBandPass"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> Space - Shooteur 3D </td>
                  <td> Unity </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/SpaaceShooter"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> Appli Wifi </td>
                  <td> HTML - SASS - PHP</td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/TPWifi"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> TicTacToe </td>
                  <td> JavaScript </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/TicTacToe"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> Mon portfolio </td>
                  <td> React.js </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/reactResum-"> Link </a> 
                  </td>
                  </tr>

                  <tr>
                  <td> Horloge autonome </td>
                  <td> Javascript </td>
                  <td> 
                    <a href="https://github.com/Timothe-Renaud/HorlogueAutonome"> Link </a>
                  </td>
                  </tr>
                  
                  <tr>
                    <td> ToDo Liste </td>
                    <td> React.js </td>
                    <td> 
                      <a href="https://github.com/Timothe-Renaud/React-todo"> Link </a> 
                    </td>
                  </tr>
                  
                  <tr>
                    <td> Repository global (SSI, Dev, veille techno) </td>
                    <td> MarkDown </td>
                    <td> 
                      <a href="https://github.com/Timothe-Renaud/ressource-repo"> Link </a> 
                    </td>
                  </tr>
                  <tr>
                    <td> Mon Portfolio (2021) </td>
                    <td> React.js </td>
                    <td> 
                      <a href="https://github.com/Timothe-Renaud/PortfkolioFor2k21"> Link </a> 
                    </td>
                  </tr>
                  <tr>
                    <td> Pile de service virtualisé (Docker Stack) </td>
                    <td> Docker-compose </td>
                    <td> 
                      <a href="https://github.com/Timothe-Renaud/DockerStack.git"> Link </a> 
                    </td>
                  </tr>
                </tbody>  
              </table><br></br>
              <p>Je vous invite aussi à visité mon profile <a href="https://github.com/Timothe-Renaud">GitHub</a> pour avoir une vue d'essemble des projets sur les quelles j'ai travaillé.</p>
            </TextBox>
          </Col>
        </Row>
      </Contentdiv>
    </React.Fragment>
  );
};

export default Projects;
