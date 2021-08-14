import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//styles
import { Wrapper, Content, StyledLink, linkStyle } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            {/* <StyledLink to='/'>
                <span>Home</span>
            </StyledLink> */}
            <Link to='/' style={linkStyle}>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
}

export default BreadCrumb