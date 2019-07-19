export class ConfigurationError extends Error {
  constructor() {
    super('Configuration is not defined');
  }
}
