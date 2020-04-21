import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'

const ViewNotes = ({notes,history}) => {
    return(
        <div className='row row-cols-3' >
          {notes.map(note => {
            return (
              <div className='col my-3' key={note.id} onClick= {() => history.push(`/view-note/${note.id}`)}>
                <Card >
                    <CardBody>
                    <CardTitle style={{fontWeight: 'bold'}}>{note.title}</CardTitle>
                    <CardText>{note.description}</CardText>
                    </CardBody>
                </Card>
               </div>
            )
          })}
    </div>
    );
}

export default ViewNotes;