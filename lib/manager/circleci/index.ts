import { extractPackageFile } from './extract';
import { updateDependency } from './update';

export { extractPackageFile, updateDependency };

export const defaultConfig = {
  fileMatch: ['(^|/).circleci/config.yml$'],
};
