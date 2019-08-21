import React, { Component } from 'react'
import IglooSideNavigation from '../IglooSideNavigation/IglooSideNavigation'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  list: {
    
  }
};
class IglooAppbar extends Component {

render() {
    return (
      <div>
<IglooSideNavigation/>
      </div>
    )
  }
}
export default withStyles(styles)(IglooAppbar)
