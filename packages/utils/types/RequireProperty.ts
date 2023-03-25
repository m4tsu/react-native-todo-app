export type RequireProperty<T, K extends keyof T> = T & {
  [key in K]-?: NonNullable<T[key]>
}
