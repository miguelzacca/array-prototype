interface Array<T> {
  random(): T
  shuffle(): T[]
  unique(): T[]
  last(): T
  average(precision?: number): number
  remove(value: T): T[]
  min(): number
  max(): number
  groupBy<K extends keyof T>(key: K): Record<string, T[]>
}

Object.assign(Array.prototype, {
  random() {
    return this[Math.floor(Math.random() * this.length)]
  },

  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this[i], this[j]] = [this[j], this[i]]
    }
    return this
  },

  unique() {
    return [...new Set(this)]
  },

  last() {
    return this[this.length - 1]
  },

  average(precision?: number) {
    const average =
      this.reduce((acc: number, val: number) => acc + val, 0) / this.length
    return precision ? Number(average.toFixed(precision)) : average
  },

  remove(value) {
    return this.filter((el: typeof value) => el !== value)
  },

  min() {
    return Math.min(...this)
  },

  max() {
    return Math.max(...this)
  },

  groupBy(key) {
    return this.reduce(
      (acc: Record<string, any>, obj: Record<typeof key, any>) => {
        const property = obj[key]
        if (!acc[property]) {
          acc[property] = []
        }
        acc[property].push(obj)
        return acc
      },
      {},
    )
  },
} as Array<any>)
