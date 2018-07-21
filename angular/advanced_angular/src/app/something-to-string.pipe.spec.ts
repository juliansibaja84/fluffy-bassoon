import { SomethingToStringPipe } from './something-to-string.pipe';

describe('SomethingToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SomethingToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
