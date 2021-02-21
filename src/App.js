import React, { useState, useEffect } from 'react'
import './App.css';

import { Button, Form, FormGroup, Label, Input, 
  FormText, Nav, NavItem, Dropdown, DropdownItem,
   DropdownToggle, DropdownMenu, NavLink,
   Container, Row, Col 
  } from 'reactstrap';
  import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter} from 'react-icons/fa';
import Single from './Single';
import FromUser from './SingleFromUser';
  

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  
  const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');
    // const now = new Date();
    // const day = now.getDay();
    // const month = now.getMonth();
    // const year = now.getFullYear();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('hello nerd');
    if (!email || !textArea) {
      console.log('uzupełnij dane')
    } 
       else {
        setTextArea(e.target.value);
          setEmail(e.target.value);
          console.log(email);
      console.log(textArea);
        }
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
        <h1>Welcome to the Cat Blog</h1>
        <h3>Mrauuuu...</h3>
        <div className="uppercase"></div>
      </header>
          </Col>
        </Row>
        <Row className="blog-text">
          <Col lg="9" md="9" sm="12" 
          className="main-text">
            <Single />
          </Col>
          <Col lg="3" md="3" sm="12" className="side-text">
          <div className="blog-t">
               <h4>Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna 
                 aliqua. Ut enim ad minim veniam, quis nostrud 
                 ercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor 
                  in reprehenderit in voluptate velit esse cill
                   dolore eu fugiat nulla pariatur. Excepteur 
                   sint occaecat cupidatat non proident, sunt 
                   in culpa qui officiadeserunt mollit anim id est laborum.</h4>
            </div>
            
          </Col>
        </Row>

      </Container>
     
     <section className="blog-form col-lg-12">
      <h3 className="text-center" style={{padding:"2rem"}}>Chcesz współtworzyć tego bloga? 
      Znasz intersujące nowinki?</h3>
      <h4 className="text-center" style={{padding:"0.5rem"}}>Wpisz swoją wiadomość w polu poniżej aby zobaczyć treść na blogu</h4>
      <Form style={{padding: "2rem"}}
      onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
        // value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" 
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
