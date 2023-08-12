import { useEffect, useState } from "react";

const Timer = () => {
    // const [count, setCount] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hoursVal, setHoursVal] = useState(0);
    const [minutesVal, setMinutesVal] = useState(0);
    const [secondsVal, setSecondsVal] = useState(0);
    const [ampm, setampm] = useState("");
    const [hoursDot, setHoursDot] = useState("");
    const [minutesDot, setMinutesDot] = useState("");
    const [secondsDot, setSecondsDot] = useState("");

    let circleProps = 35;
    let dashArr = 220;
    useEffect(() => {
      let date,
        timer,
        hr,
        mn,
        sc,
        am_pm,
        hrsVal,
        minsVal,
        secVal,
        hr_dot,
        min_dot,
        sec_dot;
  
      date = new Date();
      // console.log(date);
      timer = setInterval(() => {
        hr = date.getHours();
        mn = date.getMinutes();
        sc = date.getSeconds();
        am_pm = hr >= 12 ? "PM" : "AM";
        setampm(am_pm);
        // convert 24hr clock to 12hr clock
        if (hr > 12) {
          hr = hr - 12;
          if (hr < 10) {
            hr = "0" + hr;
          }
        }
        setHours(hr);
        if (mn < 10) {
          mn = "0" + mn;
        }
        setMinutes(mn);
        if (sc < 10) {
          sc = "0" + sc;
        }
        setSeconds(sc);
  
        // for storke
        hrsVal = dashArr - (dashArr * hours) / 12;
        setHoursVal(hrsVal);
        minsVal = dashArr - (dashArr * minutes) / 60;
        setMinutesVal(minsVal);
        secVal = dashArr - (dashArr * seconds) / 60;
        setSecondsVal(secVal);
        // for dots
        hr_dot = `rotate(${hours * 30}deg)`;
        //360/12 = 30
        setHoursDot(hr_dot);
        min_dot = `rotate(${minutes * 6}deg)`;
        //360/60 = 6
        setMinutesDot(min_dot);
        sec_dot = `rotate(${seconds * 6}deg)`;
        //360/60 = 6
        setSecondsDot(sec_dot);
  
        // setCount((cnt) => cnt + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, [hours, minutes, seconds, dashArr]);
  
    return (
      <div className="md:pr-2">
         <div id="time" className="flex justify-center bg-[#2f363e] ">
        {/* Timer:<span>{count}</span>  */}
        {/* Time:<span>{currTime}</span>{" "} */}
        <div className="circle" style={{ "--clr":"var(--clrhr)" }}>
          <div className="dots hr_dot" style={{ transform: hoursDot }}></div>
          <svg>
            <circle cx={circleProps} cy={circleProps} r={circleProps}></circle>
            <circle
              cx={circleProps}
              cy={circleProps}
              r={circleProps}
              style={{ strokeDashoffset: hoursVal }}
            ></circle>
          </svg>
          <div id="hours">
            {hours}
            <br />
            <span>Hours</span>
          </div>
        </div>
        <div className="circle" style={{ "--clr": "var(--clrmm)" }}>
          <div className="dots min_dot" style={{ transform: minutesDot }}></div>
          <svg>
            <circle cx={circleProps} cy={circleProps} r={circleProps}></circle>
            <circle
              cx={circleProps}
              cy={circleProps}
              r={circleProps}
              style={{ strokeDashoffset: minutesVal }}
            ></circle>
          </svg>
          <div id="minutes">
            {minutes}
            <br />
            <span>Minutes</span>
          </div>
        </div>
        <div className="circle" style={{ "--clr": "var(--clrss)" }}>
          <div className="dots sec_dot" style={{ transform: secondsDot }}></div>
          <svg>
            <circle cx={circleProps} cy={circleProps} r={circleProps}></circle>
            <circle
              cx={circleProps}
              cy={circleProps}
              r={circleProps}
              style={{ strokeDashoffset: secondsVal }}
            ></circle>
          </svg>
          <div id="seconds">
            {seconds}
            <br />
            <span>Seconds</span>
          </div>
        </div>
        <div className="ap">
          <div id="ampm">{ampm}</div>
        </div>
      </div>
      </div>  
     
    );
  };

  export default Timer;