
import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const urlRecent =  'https:/fcctop100.herokuapp.com/api/fccusers/top/recent'
const urlAllTime = 'https:/fcctop100.herokuapp.com/api/fccusers/top/alltime'



class Table extends Component {
	constructor(props) {
		super()
		this.state = {
			recent: [],
			allTime: []			
		}		
	}
	
	componentWillMount() {	
	 
	  axios.get(urlRecent)
      .then(res => {
      	var array = res.data.map((item,i) => ({...item, index: i+1}))      	
      	this.setState({recent:array})      
      })

       axios.get(urlAllTime)
      .then(res => {
      	var array = res.data.map((item,i) => ({...item, index: i+1}))  
      	this.setState({allTime: array})      	
      })
	}
	
	render() {
		const { recent, allTime} = this.state
		const  imageFormatter = (cell, row) => (<img src={cell} alt="" />)	

 		return (
				<BootstrapTable data={this.props.recent ? recent : allTime} striped hover>
					  <TableHeaderColumn dataField='index' autoValue>Position</TableHeaderColumn>
					  <TableHeaderColumn dataField="img" dataFormat={imageFormatter}>Image</TableHeaderColumn>
				      <TableHeaderColumn isKey dataField='username'>Name</TableHeaderColumn>
				      <TableHeaderColumn dataField='recent'>Recent</TableHeaderColumn>
				      <TableHeaderColumn dataField='alltime'>All Time</TableHeaderColumn>				    
				      <TableHeaderColumn dataField='lastUpdate'>Last Update</TableHeaderColumn>
				</BootstrapTable>		
		)
	}
}

export default Table;