import typeCheckDate from './typeCheck';

export const returnDate = props => {
    return typeCheckDate(props) - Date.now()
}

export const roundDays = args => {
    return Math.floor(args / (1000 * 60 * 60 * 24))
}

export const roundHours = args => {
    return Math.floor((args % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
}

export const roundMinutes = args => {
    return Math.floor((args % (1000 * 60 * 60)) / (1000 * 60))
}

export const roundSeconds = args => {
    return Math.floor((args % (1000 * 60)) / 1000)
}