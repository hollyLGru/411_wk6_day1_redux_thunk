import React from 'react'
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

const Import = (props) => {
    // fill out this component

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
				Import
			</Button>
			<h2>COUNT: {props.makes.length}</h2>
            <Table>
			<TableHead>
				<TableRow>
					<TableCell>Id</TableCell>
					<TableCell>Make</TableCell>
					<TableCell>Actions</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>{props.makes.map((make, index) => (
				<TableRow key={index}>
					<TableCell>{make.MakeId}</TableCell>
					<TableCell>{make.MakeName}</TableCell>
					<TableCell><MoreVert/></TableCell>
				</TableRow>
                        ))}
		</TableBody>
			</Table>
        </Container>
    )
}

export default Import