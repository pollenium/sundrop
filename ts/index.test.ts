import { Sundrop } from './'
import { Snowdrop } from 'pollenium-snowdrop'

let sundrop: Sundrop<number>
let snowdrops: Snowdrop<number>[] = []

test('create sundrop', () => {
  sundrop = new Sundrop<number>()
})

test('create snowdrops', () => {
  for (let i = 0; i < 3; i++) {
    snowdrops.push(new Snowdrop<number>())
  }
  expect(snowdrops.length).toBe(3)
})

test('set parent 0; test 2 emits', () => {
  expect.assertions(2)
  sundrop.setParentSnowdrop(snowdrops[0])
  const sundropHandleId = sundrop.addHandle((number) => {
    expect(number).toBe(0)
  })
  snowdrops[0].emit(0)
  snowdrops[0].emit(0)
  sundrop.removeHandleById(sundropHandleId)
})

test('set parent 1; test 3 emits', () => {
  expect.assertions(3)
  sundrop.setParentSnowdrop(snowdrops[1])
  const sundropHandleId = sundrop.addHandle((number) => {
    expect(number).toBe(1)
  })
  snowdrops[1].emit(1)
  snowdrops[1].emit(1)
  snowdrops[1].emit(1)
  sundrop.removeHandleById(sundropHandleId)
})

test('emitting snowdrop 1 should be received', () => {
  expect.assertions(1)
  const sundropHandleId = sundrop.addHandle((number) => {
    expect(number).toBe(1)
  })
  snowdrops[1].emit(1)
  sundrop.removeHandleById(sundropHandleId)
})
