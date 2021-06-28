import React from 'react'

function Table(props) {
    return (
        <>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>when</th>
                        <th>who</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((element,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{element.when}</td>
                                    <td>{element.who}</td>
                                    <td>{element.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table
