import { MeanPipe } from './mean.pipe';

describe('MeanPipe', () => {
  let pipe: MeanPipe;

  beforeEach(() => {
    pipe = new MeanPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Bad Inputs', () => {
    it('should return the object', () => {
      const notAnArray = pipe.transform({a: 'a'} as any);
      expect(notAnArray).toEqual({a: 'a'} as any );
    });

    it('should return null', () => {
      expect(pipe.transform(null)).toEqual(null);
    });

    it('should return undefined', () => {
      expect(pipe.transform([])).toEqual(undefined);
    });

  });

  describe('Calculations', () => {

   it('should return 1', () => {
     expect(pipe.transform([1])).toEqual(1);
   });

  it('should return 0', () => {
    expect(pipe.transform([-1,1])).toEqual(0);
  });

 });

});
