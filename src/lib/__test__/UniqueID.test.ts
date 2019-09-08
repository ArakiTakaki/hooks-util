import uid from '../UniqueID'

it('UID', () => {
  for (let i = 1; i < 100; i++) {
    expect(uid()).toBe(i.toString(36))
  }
})
