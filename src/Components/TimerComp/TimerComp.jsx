import React, { useState, useEffect } from 'react'
import "../TimerComp/TimerComp.css"

const TimerComp = (props) => {
    const { timeBaking,egg,active } = props;
    const [timer, setTimer] = useState(timeBaking)
    const [min, setMin] = useState(Math.floor(timer / 60));
    const [sec, setSec] = useState(Math.floor(timer - min * 60));
    const [degrees, setDegrees] = useState(0);
    const [animation, setAnimation] = useState(false);
    const [time, setTime] = useState();
    const [color1,setColor1]=useState(100)
    const [activeHeight,setActiveHeight]= useState(false)

    useEffect(()=>{
        setTimer(timeBaking)
    },[timeBaking])

    if (timer === 0) {
        clearInterval(time)
       
    }
    console.log("timer",timer);
    
    useEffect(() => {
        let newTimer = timer
        let newMin = Math.floor(newTimer / 60)
        setMin(newMin)
        setSec(Math.floor(newTimer - newMin * 60))
        setDegrees((360 * newTimer) /timeBaking)
        setColor1((timer /timeBaking) * 100)
        if (timer === 0) {
            let flug = false
            egg({})
            setActiveHeight(flug)
            active(flug)
        }
    }, [timer])

    const timerUpdate = () => {
        if (timer != 0) {
            setTimer((t) => {
                return t - 1
            })
            setAnimation((animation) => !animation)
        }
      
    }
    const play = () => {
        if (timer != 0) {
            let flug = true
            setTime(setInterval(() => timerUpdate(), 1000))
            setActiveHeight(flug)
            active(flug);   
        }
    }

    const getTime = (p) => {
        return p < 10 ? `0${p}` : p

    }

    return (
        <>
            <div  className="top">
                <div style={animation === false ? { transform: `rotate(2deg)` } : { transform: `rotate(-2deg)` }} className="canvas"></div>
                <div className="canvas2">
                    <div className="white-section"></div>
                </div>
            </div>
            <div style={{backgroundImage:`linear-gradient(to bottom,#ffa50094 0%, #ec3608 ${color1}%)`,height:`${activeHeight===true?100:50}%`}} className='TimerComp'>

                <div style={{ background: `conic-gradient(rgb(239, 4 ,4) ${degrees}deg , rgba(211, 211, 211) 0deg)` }} className='timer-bar'>
                    <div onClick={() => play()} className="timer">
                        <h2>{getTime(min)}:{getTime(sec)}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TimerComp;