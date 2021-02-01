import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import {Link, useRouteMatch} from 'react-router-dom'

export default function SideMenu({toggleDrawer}) {

    const {url} = useRouteMatch()

    return (
        <List>
        {[{link:null, text:'Dashboard'},
         {link:'team', text:'My Team'},
         {link:'teams', text:'Teams'},
         {link:'fa', text:'Free Agents'},
         {link:'history', text:'History'},
         {link:'draft', text:'Draft'} ].map((item, index) => (
          <ListItem button key={index} onClick={toggleDrawer}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <Link to={item.link!=null ? `${url}/`+ item.link : '/dashboard'}><ListItemText>{item.text}</ListItemText></Link>
          </ListItem>))}
        </List>
    )
}
