export function sanitize(input) {
    return input.replace(/[<>'"%;()&+]/g, "")
  }