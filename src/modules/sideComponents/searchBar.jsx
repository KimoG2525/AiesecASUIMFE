import React from 'react'
import './styling/searchStyle.scss'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
     position: 'absolute',
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 1),
      marginTop:'5px',
      color: '#fff',
      fontSize:'18px',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },

  }));

const SearchBar = () => {
    const classes = useStyles();
    const search = () => {

    }
    return(
        <div className="searchBar">
         <Button style={{color:'#fff',fontSize:'30px',height:'120%',marginTop:'-3px'}} onClick={search}><SearchIcon /></Button>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    )
}

export default SearchBar