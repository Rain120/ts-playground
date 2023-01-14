export type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

export type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

export type Token = any
export type ParseResult<T, K extends Token[]> = [T, K]
export type Tokenize<T extends string, S extends Token[] = []> = Token[]
export type ParseLiteral<T extends Token[]> = ParseResult<any, T>

export type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>
