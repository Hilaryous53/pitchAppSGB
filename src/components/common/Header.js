import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderColumn from './HeaderColumn';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


class Header extends React.Component {
	  constructor(props) {
	    super(props);
	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      dropdownOpen: false
	    };
	  }

	  toggle() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
	  }

	  render() {
	    return (
	      <div>
	        <Nav pills>
	          <NavItem>
	            <NavLink href="/" active>SGB</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink href="/aboutSGB">About</NavLink>
	          </NavItem>
	          <NavItem>
	            <NavLink href="/Home">Feed</NavLink>
	          </NavItem>
	        </Nav>
	      </div>
	    );
	  }
	}



export default withRouter(Header);
