import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
const useStyles = makeStyles((theme)=>({
    counter: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        color:"#fff",
        fontSize:22,
        border:"1px solid #fff",
        borderRadius: 4,
        background:"rgba(0,0,0,0.5)"
    },
}));

const CountDown = () => {
    const classes = useStyles();

    const [date, setDate] = useState(()=> {
        const localData= localStorage.getItem("date");
        return localData? moment(JSON.parse(localData)): moment().add(10,"hours");
    });

    const [hours, setHours] = useState("00");
    const [minutes, setMinites] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef();

    useEffect(() => {
        countDownBegin();
        return clearInterval(interval.current);
    }, [date]);

    const countDownBegin = () => {
        interval=setInterval(() => {
            localStorage.setItem("date", JSON.stringify(date))
            const now = moment();
            const distance = date - now; 
            
            const hours = moment.duration(distance).hours();
            const minutes = moment.duration(distance).minutes(); 
            const seconds = moment.duration(distance).seconds();


            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setHours(hours);
                setMinites(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    };

    return (
        <div className={classes.counter}>
            <div>
                <p>{hours}</p>
                <p><small>Saat</small></p>
            </div>

            <div>
                <p>{minutes}</p>
                <p><small>Dakika</small></p>
            </div>

            <div>
                <p>{seconds}</p>
                <p><small>Saniye</small></p>
            </div>
        </div>
    )
};
export default CountDown;