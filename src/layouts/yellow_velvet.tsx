import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'
import '../styles/sitewide.yellow_velvet.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Media, MediaContextProvider } from "../Media"
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Page from '../components/Page'

import DesktopSiteContainer from '../containers/DesktopSiteContainer'
import MobileSiteContainer from '../containers/MobileSiteContainer'


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
            <MediaContextProvider>
              <Media at="sm">
                <MobileSiteContainer>
                  { children }
                </MobileSiteContainer>
              </Media>
              <Media greaterThan="sm">
                <DesktopSiteContainer>
                  { children }
                </DesktopSiteContainer>
              </Media>
            </MediaContextProvider>
          </Page>
        </LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default YellowVelvetLayout
