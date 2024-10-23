function formatMonth(month: number): string {
  return month < 10 ? `0${month}` : month.toString()
}

export function waterDateValidityGetMinDate(): string {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  const minYear = currentYear - 3
  const minMonth = currentMonth + 1 > 12 ? 1 : currentMonth + 1

  const formattedMinMonth = formatMonth(minMonth)
  return `${minYear}-${formattedMinMonth}`
}

export function waterDateValidityGetMaxDate(): string {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1

  const maxYear = currentYear + 3
  const formattedMaxMonth = formatMonth(currentMonth)

  return `${maxYear}-${formattedMaxMonth}`
}
