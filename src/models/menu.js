import {Navbar, Form, Nav} from 'react-bootstrap'
import { Button } from 'reactstrap';
import React from 'react';
class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {bg: 'dark'};
    this.setBg()
  }
  
  setBg = () => {
    window.onscroll = (event) => {
      if(window.pageYOffset !== 0){
        this.setState({
          bg: 'light'
        })
        return
      }
        this.setState({
          bg: 'dark'
        })
    }
  }
  render(){
  return (
    <Navbar className="fixed-top" bg={this.state.bg} variant={this.state.bg}>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Главная</Nav.Link>
      <Nav.Link href="/news">Новости</Nav.Link>
      <Nav.Link href="/feedback">Отзывы</Nav.Link>
      <Nav.Link href="/download">Скачать</Nav.Link>
      <Nav.Link href="/about">О программе</Nav.Link>
    </Nav>
    <div>
      <Button color="success" className="mr-1">Вход</Button>
      <Button color="outline-warning" className="ml-1">Регистрация</Button>
    </div>
  </Navbar>
  )}}
  export default Menu