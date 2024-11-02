'use client'
import React from "react"
import moment from "moment"

interface CountDownTimerProps{
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const FlashSaleCountDownTimer = ()=>{
    const _3daysInFuture = moment('2024-11-06')
    const now = moment()
    const diff = _3daysInFuture.diff(now)
    const duration = moment.duration(diff)

    const [timer, setTimer] = React.useState<CountDownTimerProps>({
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds()
    })

    React.useEffect(()=>{
        
        const interval = setInterval(()=>{
            setTimer({
                days: duration.days(),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds()
            })
        }, 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [timer])
    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col text-center">
                <span className="text-xs font-semibold">Days</span>
                <span className="text-2xl font-bold">{timer.days.toString().padStart(2, '0')}</span>
            </div>
            <div>
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#E07575"/>
                <circle cx="2" cy="14" r="2" fill="#E07575"/>
                </svg>
            </div>
            <div className="flex flex-col text-center">
                <span className="text-xs font-semibold">Hours</span>
                <span className="text-2xl font-bold">{timer.hours.toString().padStart(2, '0')}</span>
            </div>
            <div>
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#E07575"/>
                <circle cx="2" cy="14" r="2" fill="#E07575"/>
                </svg>

            </div>
            <div className="flex flex-col text-center">
                <span className="text-xs font-semibold">Minutes</span>
                <span className="text-2xl font-bold">{timer.minutes.toString().padStart(2, '0')}</span>
            </div>
            <div>
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="#E07575"/>
                <circle cx="2" cy="14" r="2" fill="#E07575"/>
                </svg>
            </div>
            <div className="flex flex-col text-center">
                <span className="text-xs font-semibold">Seconds</span>
                <span className="text-2xl font-bold">{timer.seconds.toString().padStart(2, '0')}</span>
            </div>
        </div>
    )
}