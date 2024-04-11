import { Languages } from '@/hooks/internationalization'

import {
    Locale,
    format,
    set,
    isValid,
    addMinutes,
    differenceInSeconds
} from 'date-fns'
import localeEnUs from 'date-fns/locale/en-US'
import localePtBR from 'date-fns/locale/pt-BR'

export function getUTCDate(date: string | Date) {
    const dateObj = new Date(date)

    return addMinutes(dateObj, dateObj.getTimezoneOffset())
}

export function formatHour(date: string | Date | undefined, locale: Locale) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(new Date(date), 'HH:mm', { locale })
}

export function formatTime(date: string | Date | undefined, locale: Locale) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(new Date(date), 'HH:mm:ss', { locale })
}

export function formatTimeUTC(date: string | Date | undefined, locale: Locale) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(getUTCDate(date), 'HH:mm:ss', { locale })
}

export function formatDate(date: string | Date | undefined, locale: Locale) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(getUTCDate(date), 'dd/MM/yyyy', { locale })
}

export function formatFullDateUTC(
    date: string | Date | undefined,
    locale: Locale
) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(getUTCDate(date), 'dd/MM/yyyy HH:mm:ss', { locale })
}

export function formatFullDate(
    date: string | Date | undefined,
    locale: Locale
) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(new Date(date), 'dd/MM/yyyy HH:mm:ss', { locale })
}

export function formatToJsonStringUTC(
    date: string | Date | undefined,
    locale: Locale
) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(getUTCDate(date), "yyyy-MM-dd'T'HH:mm:ss'Z'", { locale })
}

export function formatToJsonString(
    date: string | Date | undefined,
    locale: Locale
) {
    if (!date || !isValid(date)) {
        return ''
    }

    return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss'Z'", { locale })
}

export function getDateBySeconds(seconds: number | undefined) {
    if (!seconds && seconds !== 0) {
        return ''
    }

    const date = new Date()
    const hours = Math.floor(seconds / 3600)
    seconds -= hours * 3600
    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60

    return set(date, { hours, minutes, seconds })
}

export function getHoursBySeconds(seconds: number | undefined) {
    if (!seconds && seconds !== 0) {
        return ''
    }

    const hours = Math.floor(seconds / 3600)
    seconds -= hours * 3600
    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60

    const paddedHours = hours.toString().padStart(2, '0')
    const paddedMinutes = minutes.toString().padStart(2, '0')
    const paddedSeconds = seconds.toString().padStart(2, '0')

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
}

export function getLocale(locale: string) {
    if (locale === Languages.EN) {
        return localeEnUs
    }
    return localePtBR
}

export function getSecondsFromTimeString(time: string) {
    const timeArray = time.split(':')

    return (
        Number(timeArray[0]) * 3600 +
        Number(timeArray[1]) * 60 +
        Number(timeArray[2])
    )
}

export function getDiferenceSecondsFromTimeString(
    time1: string,
    time2: string
) {
    const time1Array = time1.split(':')
    const time2Array = time2.split(':')
    const start = new Date(
        0,
        0,
        0,
        Number(time1Array[0]),
        Number(time1Array[1]),
        Number(time1Array[2])
    )
    const end = new Date(
        0,
        0,
        0,
        Number(time2Array[0]),
        Number(time2Array[1]),
        Number(time2Array[2])
    )
    return differenceInSeconds(end, start)
}
