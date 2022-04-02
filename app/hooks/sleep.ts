const sleep = (ms: number): Promise<NodeJS.Timeout> =>
  new Promise((resolve) => setTimeout(resolve, ms))

export default sleep
