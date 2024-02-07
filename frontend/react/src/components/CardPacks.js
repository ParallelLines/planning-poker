const standartAverage = (list) => {
    const result = list.reduce((acc, curr) => {
        const sum = parseFloat(curr)
        if (!Number.isNaN(sum)) {
            acc.sum += sum
            acc.qty += 1
            return acc
        }
        return acc
    }, { sum: 0, qty: 0 })
    if (result.qty === 0) return 'zzZ'
    return (result.sum / result.qty).toFixed(1)
}

export const mountainGoat = {
    name: 'Mountain Goat',
    cards: ['0', '0.5', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'],
    average: standartAverage
}

export const fibonacci = {
    name: 'Fibonacci',
    cards: ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?'],
    average: standartAverage
}

export const sequential = {
    name: 'Sequential',
    cards: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '?'],
    average: standartAverage
}

export const compact = {
    name: 'Compact',
    cards: ['0', '1', '2', '3', '5', '8', '13', '20'],
    average: standartAverage
}

export const playingCards = {
    name: 'Playing Cards',
    cards: ['A♠', '2', '3', '5', '8', '♔'],
    average: (list) => { return 0 }
}

export const tShirt = {
    name: 'T-Shirt',
    cards: ['XS', 'S', 'M', 'L', 'XL', '?'],
    average: (list) => { return 0 }
}