export class ZodFalattenError<
  T extends { formErrors: string[]; fieldErrors: { [k: string]: string[] } }
> extends Error {
  override name = 'ZodFalattenError'
  formErrors: T['formErrors']
  fieldErrors: T['fieldErrors']

  constructor({ fieldErrors, formErrors }: T) {
    super('Validation Error')
    this.fieldErrors = fieldErrors
    this.formErrors = formErrors
  }
}
