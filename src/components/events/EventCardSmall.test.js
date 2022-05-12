import { isSameDayEvent, toDateTime } from './EventCardSmall'

describe('isSameDayEvent', ()=>{
  it('returns true if event occurs within the same calendar day', ()=>{
    const event = {
      start: new Date(2020, 3, 21, 0, 5),
      finish: new Date(2020, 3, 21,  23, 55),
    }
    const isSameDay = isSameDayEvent(event)

    expect(isSameDay).toBe(true)
  })
  it('returns false if event crosses calendar day boundary', ()=>{
    const event = {
      start: new Date(2020, 3, 20, 23, 55),
      finish: new Date(2020, 3, 21, 0, 5),
    }
    const isSameDay = isSameDayEvent(event)

    expect(isSameDay).toBe(false)
  })
  it('identifies dates as different across years', ()=>{
    const event = {
      start: new Date(2020, 3, 20, 0, 5),
      finish: new Date(2021, 3, 20, 0, 5),
    }
    const isSameDay = isSameDayEvent(event)

    expect(isSameDay).toBe(false)
  })
})

describe('toDateTime', ()=>{
  const event = {
    start: new Date(2020, 3, 20, 0, 5),
    finish: new Date(2021, 3, 20, 0, 5),
  }
  it('returns a correctly formatted date', ()=>{
    const formatted = toDateTime(event.start)
    const expected = '20 Apr 2020, 00:05'

    expect(formatted).toEqual(expected)
  })

  it('does not include the date if includeDate = false', ()=>{
    const formatted = toDateTime(event.start, false)
    const expected = '00:05'

    expect(formatted).toEqual(expected)
  })
})