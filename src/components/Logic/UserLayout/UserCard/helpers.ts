export const makeLenghtCutter = (numberOfLetters: number) => {
    return (str: string) => {
        return str.length > numberOfLetters
            ? str.slice(0, numberOfLetters) + '...'
            : str
    }
}
export const limitString30 = makeLenghtCutter(30)


export const maskThePhone = (phoneNumber: string) => {
    const res = phoneNumber

    return `${res.slice(0, 3)} (${res.slice(3, 6)}) ${res.slice(6, 9)} ${res.slice(9, 11)} ${res.slice(11, 13)}`
}