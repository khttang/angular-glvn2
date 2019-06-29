import { expect } from 'chai';
import 'mocha';
import { logger } from '../../backend/utils/logger'

describe('Winston Logger', () => {
  it('should log successfully', () => {
    logger.debug('This is a test');
  })
});
