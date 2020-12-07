import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Button } from 'reactstrap';
import Auth from '../models/auth'
import Reg from '../models/reg'
import firebase from "../db/fbDb"
import { Link } from "react-router-dom";
import React, { Component } from "react";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: '#483D8B',
      collapsed: true,
      login: false,
      navWhite: false,
      name: null
    };
    this.setBg()
  }

  setBg = () => {
    window.onscroll = (event) => {
      if (window.pageYOffset !== 0) {
        this.setState({
          bg: '#D8BFD8'
        })
        return
      }
      this.setState({
        bg: '#483D8B'
      })
    }
  }

  alertName = () => {
    return (
      <NavItem className="container">
        <p class="text-light m-0 p-0">Привет, {this.state.name}</p>
        <Button className="ml-2" color="outline-warning" onClick={() => { this.toggleNavbarClose(); this.logOut() }}>
          Выход
            </Button>
      </NavItem>
    );
  }
  setName = (value) => {
    this.setState({ name: value });
  }
  toggleNavbarClose() {

  }
  logOut = async () => {
    if (window.confirm(`Вы уверены?`))
      await firebase.logout().catch(err => alert(err.message));
    this.setName(null);

  }
  loginBtn = (event) => {
    return (
      <NavItem className="container">
        <Auth setName={this.setName} TNClose={event} buttonLabel="Войти" />
        <Reg TNClose={event} buttonLabel="Регистрация" />
      </NavItem>
    );
  };
  render() {
    return (
      <Navbar style={{ backgroundColor: this.state.bg }} className="fixed-top" variant={this.state.bg}>
        <Navbar.Brand ><Link style={{ color: "gray" }} to="/">World Of Beauty</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Link className='m-2' style={{ color: "white" }} to="/news">Новости</Link>
          <Link className='m-2' style={{ color: "white" }} to="/feedback">Отзывы</Link>
          <Link className='m-2' style={{ color: "white" }} to="/download">Скачать</Link>
          <Link className='m-2' style={{ color: "white" }} to="/about">О программе</Link>
        </Nav>
        <div>
          {this.state.name === null ? this.loginBtn(this.toggleNavbarClose) : this.alertName()}

        </div>
      </Navbar>
    )
  }
}
export default Menu