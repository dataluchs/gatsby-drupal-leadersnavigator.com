import React, { Component, Fragment } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../Global"
import {
    Nav,
    NavItem,
    Brand,
    StyledContainer,
    NavListWrapper,
    MobileMenu,
    Mobile,
    ActionsContainer,
} from "./style"
import logo from '../../images/logos/leadersnavigator-mockup.png'

const NAV_ITEMS = [
    "Digital Innovation", "Digital Leadership", "Digital Business Analysis"
]



export default class Navigation extends Component {
    state = {
        mobileMenuOpen: false,
        hasScrolled: false,
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = event => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 32) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    toggleMobileMenu = () => {
        this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
    }

    closeMobileMenu = () => {
        if (this.state.mobileMenuOpen) {
            this.setState({ mobileMenuOpen: false })
        }
    }

    getNavAnchorLink = item => (
        <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
            {item}
        </AnchorLink>
    )

    getNavList = ({ mobile = false }) => (
        <NavListWrapper mobile={mobile}>
            <Scrollspy
                items={NAV_ITEMS.map(item => item.toLowerCase())}
                currentClassName="active"
                mobile={mobile}
                offset={-64}
            >
                {NAV_ITEMS.map(navItem => (
                    <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
                ))}
            </Scrollspy>
        </NavListWrapper>
    )

    render() {
        const { mobileMenuOpen } = this.state

        return (
            <Nav {...this.props} scrolled={this.state.hasScrolled}>
                <StyledContainer>
                    <Brand>
                        <Link to='/'>


                            <img style={{
                                maxWidth: 200,
                                marginBottom: 0
                            }} src={logo} alt="Logo" />
                        </Link>
                        {/* <Scrollspy offset={-64} item={["top"]} currentClassName="active">
                            <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                                Leadersnavigator
                            </AnchorLink>

                        </Scrollspy> */}
                    </Brand>
                    <Mobile>
                        <button
                            onClick={this.toggleMobileMenu}
                            style={{ color: "black", background: "none" }}
                        >
                            {this.state.mobileMenuOpen ? (
                                <X size={24} alt="close menu" />
                            ) : (
                                    <Menu size={24} alt="open menu" />
                                )}
                        </button>
                    </Mobile>

                    <Mobile hide>{this.getNavList({})}</Mobile>
                    <ActionsContainer>
                        {/* <button>Signup</button> */}
                    </ActionsContainer>
                </StyledContainer>
                <Mobile>
                    {mobileMenuOpen && (
                        <MobileMenu>
                            <Container>{this.getNavList({ mobile: true })}</Container>
                        </MobileMenu>
                    )}
                </Mobile>
            </Nav>
        )
    }
}
