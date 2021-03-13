import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, Form, FormGroup, Label, Input, 
  FormText, Nav, NavItem, Dropdown, DropdownItem,
   DropdownToggle, DropdownMenu, NavLink,
   Container, Row, Col, Alert
  } from 'reactstrap';
import Single from './Single';
import Adwords from './Adwords';
import article1 from './article1.jpg';
import article2 from './article2.jpg';
import article3 from './article3.jpg';
import meow from './meow.jpg';
import catart from './catart.jpg';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  
  const [email, setEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  function showAlert() {
    var item = document.getElementById("alert-div");
    item.innerText = "Uzupełnij wszystkie pola";

    setTimeout( function remove() {
      item.innerText=" ";
    }, 3000)
  }
    

    const handleSubmit = (e) => {
      e.preventDefault();
      
    if (!email && textArea){
      showAlert();
     
    } else {
       if (!textArea && email){
       showAlert();
    } else {
      if (email && textArea) {
      setTextArea(e.target.value);
          setEmail(e.target.value);
          console.log(email);
      console.log(textArea);
    }}}
  }
  return (
    <section className="blog-container col-lg-12">
      <Nav pills>
        <NavItem>
          <NavLink href="#" active style={{color: "black", backgroundColor:"transparent"}}>Popularne rasy</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret style={{color: "black", backgroundColor:"transparent"}}>
            Żywienie
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem style={{color: "black", backgroundColor:"transparent"}}>Karmy mokre</DropdownItem>
            <DropdownItem >Karmy suche</DropdownItem>
            <DropdownItem> Smakołyki</DropdownItem>
            <DropdownItem divider />
            <DropdownItem> Suplementy i witaminy</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
        <NavLink style={{color: "black", backgroundColor:"transparent"}} href="#">Pielęgnacja</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black", backgroundColor:"transparent"}} href="#">Ciekawostki</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color: "black", backgroundColor:"transparent"}} href="#">Żwirki</NavLink>
          </NavItem>
          <NavItem>
          <NavLink style={{color: "black", backgroundColor:"transparent"}} href="#">Sławne koty</NavLink>
          </NavItem>
      </Nav>
      <Container>
        <Row>
          <Col lg="12">
            <header className="title text-center">
        <div className="uppercase"></div>
        <h1>Witaj na Kocim Blogu</h1>
        <h3>Mrauuuu...</h3>
        <div className="uppercase"></div>
        <div>
            <img src={meow} alt="" className="meow-img"></img>
        </div>
      </header>
          </Col>
        </Row>
        <Row className="blog-text">
          <Col lg="9" md="9" sm="12" 
          className="main-text">
            <Single />
            <div>
              <img src={catart} alt="photo" className="meow-img"></img>
            </div>
          </Col>
          <Col lg="3" md="3" sm="12" className="side-text">
          <div className="blog-t">
            <Row className="text-center side">
                
              <div className="popular-article ">
                <h5>Właściwa karma a zdrowie kota</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur.</h6>
                  <img src={article1} alt="photo"
                  className="article-img"></img>
              </div>
              
            </Row>
               <Adwords />
               <Row>
               
                  <div className="popular-article ">
                <h5>Żywienie kociąt</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur.</h6>
                  <img src={article2} alt="photo"
                  className="article-img"></img>
              </div>
                
               </Row>
               <Row>
               
                  <div className="popular-article ">
                <h5>Polecane rasy kotów</h5>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur.</h6>
                  <img src={article3} alt="photo"
                  className="article-img"></img>
              </div>
                
               </Row>

            </div>
          </Col>
        </Row>

      </Container>
     
     <section className="blog-form col-lg-12">
      <h3 className="text-center" style={{padding:"2rem"}}>Chcesz współtworzyć tego bloga? 
      Znasz intersujące nowinki?</h3>
      <h4 className="text-center" style={{padding:"0.5rem"}}>Wpisz swoją wiadomość w 
      polu poniżej a być może dodamy Twój artykuł ;)</h4>
      <div id="alert-div">  </div>
      <Form style={{padding: "2rem"}}
      onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="user@gmail.com" 
        // value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Hi! I heard about something interesting..."
        // value={textArea}
        onChange={(e)=> setTextArea(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile"/>
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>

     </section>
      
    </section>
  );
}
export default App;
