import React from 'react';
import Avatar from 'material-ui/Avatar';
import List, {ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Phone = ({phone, view}) => {
    return (
        <ListItem button divider onClick={view(phone)}>
            <Avatar alt="Remy Sharp" src={phone.url} />
            <ListItemText primary={phone.name} secondary={phone.description} />
            <Divider />
        </ListItem >

    )
};

const PhoneListContainer = ({phones, view}) => {
    const PhoneNode = phones.map((phone) => {
       return (
           <Phone phone={phone} key={phone.id} view={view}/>
       )
    });
    return (
        <List>
            <div className="list_title">Phone list</div>
            {PhoneNode}
        </List>
    )
};

export default PhoneListContainer;