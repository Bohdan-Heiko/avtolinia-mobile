export const currentDayAndTime = () => {
  const date = new Date()
  let dataGet = date.getTime()
  date.setTime(dataGet + 7198000)
  let today = date.toISOString().slice(0, 16)
  return today
}