export type DeepNoNullable<T> = T extends Record<PropertyKey, unknown>
  ? {
      [key in keyof T]-?: DeepNoNullable<T[key]>
    }
  : NonNullable<T>
