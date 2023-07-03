export function conflictError() {
  return {
    name: 'ConflictError',
    message: 'Conflict encountered in the request. Item already exists.',
  }
}

