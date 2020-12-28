import { User } from '../models/User'
test('it should be ok', () => {
  const user = new User()
  user.name = 'José'
  expect(user.name).toEqual('José')
})
