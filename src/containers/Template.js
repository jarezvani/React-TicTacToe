import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavDrawer from '../components/NavDrawer'
import {Header, Main} from '../styled/Template'
import Relay from 'react-relay/classic'

injectTapEventPlugin()

class Template extends Component {

    render() {
        return(
            <MuiThemeProvider>
               <div>
               <NavDrawer />
               <Header>
                  TicTacToe
               </Header>
                <Main>
                    {this.props.children}
                </Main>
               </div>
            </MuiThemeProvider>
        )
    }

}

export default Relay.createContainer(
  Template, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            id
          }
        }
      `,
    }
  }
)
