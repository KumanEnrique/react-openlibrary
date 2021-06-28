import React, { Component } from 'react'
import Navigation from './Navigation'
import Table from './Table'
import {format as  taFormat} from 'timeago.js'
// const timeAgoInstance = timeago()

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    async componentDidMount(){
        const response = await fetch(`http://openlibrary.org/recentchanges.json?limit=10`)
        const data = await response.json()
        const formatData = this.formatData(data)
        this.setState({data:formatData})
        // console.log(formatData);
    }
    formatData(data){
        return data.map((data,i)=>{
            return {
                "when":taFormat(data.timestamp),
                "who":data.author.key,
                "description":data.comment,
            }
        })
    }
    render() {
        return (
            <>
                <Navigation/>
                <div className="container my-4">
                    <Table data={this.state.data}></Table>
                </div>
            </>
        )
    }
}