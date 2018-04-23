import React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const PhoneDetailComponent = (phone) => {
  return (
      (phone.phone.length === 0)?<div key={phone.id}>Select one item from list</div>:
          <div>
              <Card>
                  <CardMedia className="media_card"
                      image={phone.phone.url}
                      title="Contemplative Reptile"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                          {phone.phone.name}
                      </Typography>
                      <Typography component="p">
                          {phone.phone.description}
                      </Typography>
                      <Typography component="h3">
                          {phone.phone.price}&euro;
                      </Typography>
                  </CardContent>
              </Card>
          </div>
  );
};

export default PhoneDetailComponent;