export function invalidDataError(errorList: string[]) {
  return {
    name: 'InvalidDataError',
    message: errorList,
  }
}
