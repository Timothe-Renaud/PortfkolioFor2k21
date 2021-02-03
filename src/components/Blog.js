import React from "react";
import { Contentdiv, TitleDiv, Row, Col, TextBox } from "./styles/commonstyle";

const Blog = () => {
  return (
    <React.Fragment>
      <Contentdiv>
        <TitleDiv>Diplômes & skills</TitleDiv>
        <Row>
          <Col>
            <TextBox>
              <div class="list-group">
                <button class="list-group-item list-group-item-action"> 
                  <table>
                  <thead>
                    <tr>
                      <td class="col">
                        <strong>Diplômes</strong>
                      </td>
                      <td class="col">
                        <strong>Année</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody class="">                
                    <tr>
                      <td>
                      BTS Services informatiques aux organisations option solutions logicielles et applications métiers (SLAM).
                      </td>
                      <td>
                        2017 - 2019
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Bac professionnel SN - systèmes électonique et numériques( SEN ).
                      </td>
                      <td>
                        2014 - 2017
                      </td>
                    </tr>
                    <tr>
                      <td>
                        BEP systèmes électonique.
                      </td>
                      <td>
                        2016
                      </td>
                    </tr>
                  </tbody>  
                </table>
              </button>

              </div>
              <div class="list-group">
                <p> - Techs & Tools :</p>
                <button class="list-group-item list-group-item-action list-group-item-primary">  Microsoft Active Directory - Hyper-V - Samba 4 - Docker - FireWall Stormshield - Linux - GIT - Nginx - traefik </button>
              </div>
              <div class="list-group">
              <p>- Langages :</p>
                <button class="list-group-item list-group-item-action"> Bash - Powershell - Javscript - PHP - SQL</button>
              </div>
              <div class="list-group">
              <p>- Framework :</p>
                <button class="list-group-item list-group-item-action list-group-item-primary"> React.js - Angular.js - Electron.js - Symfony 4 - Doctrine - Entity - PHPUnit - Pester</button>
              </div>
              <div class="list-group">
              <p>- Database :</p>
                <button class="list-group-item list-group-item-action"> MySql - Oracle - FireBase - PosgreSQL</button>
              </div>
              <div class="list-group">
              <p>- Soft skills :</p>
                <button class="list-group-item list-group-item-action list-group-item-primary"> Méthodes Agiles, CI/CD, Certifié ANSSI, Communication, TOEIC - B2 ( 2017 & 2019 ), Responsable SSI, Permis B et 2 roues, Audio production et MAO, Production video, Curieux , Facteur de bonne humeur, jeune aventurier.</button>
              </div>
            </TextBox>
          </Col>
        </Row>
      </Contentdiv>
    </React.Fragment>
  );
};

export default Blog;