import { returnSuffix, formatDateTime } from '../utilities';

describe('when returnSuffix is passed a number', () => {
    it('returns the number with the correct ordinal suffix', () => {
        expect(returnSuffix(1)).toEqual('1st');
        expect(returnSuffix(2)).toEqual('2nd');
        expect(returnSuffix(3)).toEqual('3rd');
        expect(returnSuffix(4)).toEqual('4th');
        expect(returnSuffix(5)).toEqual('5th');
    });
  });

  describe('when formatDateTime is passed a timestamp', () => {
    it('returns a correctly formatted date and time', () => {
        expect(formatDateTime(1527364850)).toContain('26th May 2018 at 21:00')
        expect(formatDateTime(1924421422)).toContain('25th December 2030 at 09:30')
    });
  });
