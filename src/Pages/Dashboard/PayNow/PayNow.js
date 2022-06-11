import React, { useEffect, useRef, useState } from 'react';
import './PayNow.css';




const PayNow = () => {


    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        // Set the date we're counting down to
        const countDownDate = new Date('Jun 30, 2022 00:00:00').getTime();

        // Update the count down every 1 second
        interval = setInterval(() => {

            // Get todays date and time
            const now = new Date().getTime();

            // Find the distance between now an the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop our timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <><section className='bgimg  img-fluid'>
            <h1 className=''>COMING SOON...</h1>
            <div className=" timer ">
                <div className='middle'>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </div>
        </section>
        </>
    );
};

export default PayNow;