import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import 'modern-normalize'
import '../styles/normalize'
import { VelvetButton } from '../components/SharedStyledComponents'
import '../styles/sitewide.yellow_velvet.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Media, MediaContextProvider } from "../Media"
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Page from '../components/Page'
import Container from '../components/Container'
import Modals from '../components/Modals'
import SiteHeader from '../components/SiteHeader'
import FooterDesktop from '../components/FooterDesktop'
import FooterMobile from '../components/FooterMobile'

const Main = styled.main`
  flex-grow: 1
`


interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const YellowVelvetLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query YellowVelvetLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
          link={[
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
          ]}
        />
        <LayoutMain>
          <Page>
            <Container className="no-focus-outline">
              <SiteHeader/>
              <Main>
                {children}
              </Main>
              <section>
                <VelvetButton>request a feature</VelvetButton>
              </section>
              <MediaContextProvider>
                <Media at="sm"><FooterMobile /></Media>
                <Media greaterThan="sm"><FooterDesktop/></Media>
              </MediaContextProvider>
              <Modals />
            </Container>
          </Page>
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default YellowVelvetLayout
