import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText, Button,ButtonGroup
  } from 'reactstrap'

const ViewNote = ({notes,match,history,handleDelete,handleEdit}) => {
    const handleClick = (id) => {
         handleDelete(id)
         history.push('/view-notes')
    }

    const handleClickEdit = (id) =>{
        handleEdit(id)
        history.push('/create-note')
    }

    const { id } = match.params
    const selectedNote = notes.find(note => note.id===+id)
    return (
        <Card>
            <CardBody>
                <CardTitle style={{fontWeight: 'bold'}}>{selectedNote.title}</CardTitle>
                <CardText>{selectedNote.description}</CardText>
                <ButtonGroup>
                    <Button color= "success" className="fa fa-pencil" onClick={()=> handleClickEdit(id)}>Edit</Button>
                    <Button color= "danger" onClick={()=> handleClick(id)}>Delete</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

export default ViewNote;