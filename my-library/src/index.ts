export function Greet({ name = "" }: {name: string} ) {
    return `Why hello there, ${name}!!!!!`
}

export * from './myButton/MyButton'