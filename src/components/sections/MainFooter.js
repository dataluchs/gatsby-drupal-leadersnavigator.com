import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: '#fff',
            marginBottom: '0rem',
            borderTop: '1px solid #ddd'
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h4 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: '#111',
                        textDecoration: 'none',
                    }}
                >
                    Footer
                </Link>
            </h4>
        </div>
    </div>
)

export default Header
