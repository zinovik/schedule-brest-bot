export class ConfigParameterNotDefinedError extends Error {
  constructor(parameter: string) {
    super(`"${parameter}" is not defined`);
  }
}
