import * as core from '@actions/core'
import convert from './convert'

async function run(): Promise<void> {
  try {
    const input: string = core.getInput('input', {required: true})
    const desiredLength: string = core.getInput('desiredLength')
    const suffixLength: string = core.getInput('suffixLength')
    const desiredLengthNum = parseInt(desiredLength) || 1024
    const suffixLengthNum = parseInt(suffixLength) || 7

    core.debug(`Received str: ${input}`)
    core.debug(
      `Received desiredLength: ${desiredLength}, interpreted as: ${desiredLengthNum}`
    )
    core.debug(
      `Received suffixLength: ${suffixLength}, interpreted as: ${suffixLengthNum}`
    )

    const result: string = convert(input, desiredLengthNum, suffixLengthNum)
    core.setOutput('result', result)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
