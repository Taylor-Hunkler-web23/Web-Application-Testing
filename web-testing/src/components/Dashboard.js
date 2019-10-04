import React from 'react';

export const addOne = number => {
    return number + 1
}

function Dashboard(props) {


    const strikeCounter = () => {
        if (props.strike < 3) {
            return props.setStrike(addOne)
        } else {
            props.setStrike(0) || props.setBall(0)
        }
    }

    const ballCounter = () => {
        if (props.ball < 4) {
            props.setBall(props.ball + 1)
        } else {
            props.setBall(0) || props.setStrike(0)
        }
    }

    const foulCounter = () => {
        if (props.strike < 2) {
            props.setStrike(props.strike + 1)
        }
    }

    const hit = () => {
        props.setStrike(0) || props.setBall(0)
    }

    return (
        <div>


            <button onClick={() => strikeCounter(props.setStrike(props.strike))}>Strike</button>

            <button onClick={() => ballCounter()}>Ball</button>

            <button onClick={() => foulCounter()}>Foul</button>

            <button onClick={() => hit()}>Hit</button>

        </div>


    )
}

export default Dashboard;