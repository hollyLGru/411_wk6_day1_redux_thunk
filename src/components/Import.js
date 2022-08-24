import  React from 'react'
import { Container,
	 Button,
	  Table, 
	  TableBody, 
	  TableCell, 
	  TableHead, 
	  TableRow, 
	  Menu, 
	  MenuItem } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';


const Import = (props) => {
	
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};
	const handleDelete = () => {
		props.deleteMake();
		setAnchorEl(null);
	};

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
					<TableCell>
							<MoreVert
							id="basic-button"
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}/>
					</TableCell>
				</TableRow>
                        ))}
		</TableBody>
			</Table>
			<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleDelete}>DELETE</MenuItem>
      </Menu>
        </Container>
    )
}

export default Import