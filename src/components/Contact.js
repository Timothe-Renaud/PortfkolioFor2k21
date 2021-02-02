import React from "react";
import { Contentdiv, TitleDiv, Row, Col, TextBox } from "./styles/commonstyle";

const Contact = () => {
  return (
    <React.Fragment>
      <Contentdiv>
        <TitleDiv>Contact</TitleDiv>

        <Row>
          <Col>
            <TextBox>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#"> @Timothe_Renaud </a> on Twitter
              </li>
              <li class="list-group-item">
                <a href="https://www.linkedin.com/in/timothe-renaud-langlois-teston-9329b9151/"> mon Linkedin </a>
              </li>
              <li class="list-group-item">
                <a href="https://www.pearltrees.com/"> Veuille Technologie  </a>
              </li>
              <li class="list-group-item">
                <a href="https://github.com/Timothe-Renaud"> GitHub </a>
              </li>
              <li class="list-group-item">
                <a href="https://bts-sio.lyc-bonaparte.fr">Ma formation Sup</a>
              </li>
              <li class="list-group-item">
                <a href="http://www.lycee-cisson.fr/index.php">Ma formation Pro</a>
              </li>
              <li class="list-group-item">
                <a href="mailto:timothe-renaud.langlois-teston@intradef.gouv.fr">@email</a>
              </li>
            </ul>                  
            </TextBox>
          </Col>
        </Row>
        
      </Contentdiv>
    </React.Fragment>
  );
};

export default Contact;
