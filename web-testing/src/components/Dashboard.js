import React from 'react';


function Dashboard(props) {


    const strikeCounter = () => {
        props.setStrike(props.strike + 1)
    }

    const ballCounter = () => {

        props.setBall(props.ball + 1)
    }

    const foulCounter = () => {
        props.setFoul(props.foul + 1)
    }

    return (
        <div>
            Dashboard

            <button onClick={() => strikeCounter()}> Strike</button>

            <button onClick={() => ballCounter()}>Ball</button>

            <button onClick={() => foulCounter()}>Foul</button>

        </div>


    )
}

export default Dashboard;