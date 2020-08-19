import React from 'react'

export default class PostGame extends React.Component{

    render(){
        return (
            <div>
                <h1>Jocul s-a incheiat</h1>
                <h4>Clasament final: </h4>
                <table>
                    <thead>
                        <tr>
                            <th> Echipa </th>
                            <th> R1 </th>
                            <th> R2 </th>
                            <th> R3 </th>
                            <th> R4 </th>
                            <th> R5 </th>
                            <th> R6 </th>
                            <th> Total </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Pulambec </td>
                            <td> 6 </td>
                            <td> 7 </td>
                            <td> 6 </td>
                            <td> 4 </td>
                            <td> 3 </td>
                            <td> 8 </td>
                            <td> 69 </td>
                        </tr>
                        <tr>
                            <td> Poponarii </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 69 </td>
                        </tr>
                        <tr>
                            <td> Cacaciosii </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 6 </td>
                            <td> 9 </td>
                            <td> 69 </td>
                        </tr>
                        <tr>
                            <td> LAREME </td>
                            <td> 1 </td>
                            <td> 0 </td>
                            <td> 1 </td>
                            <td> 0 </td>
                            <td> 0 </td>
                            <td> 1 </td>
                            <td> 3 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}