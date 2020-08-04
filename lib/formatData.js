export function formatData (data) {
  const res = data[0].map((entry) => {
    const newValue = entry.value
      .replace('a:7:', '')
      .replace(/;/g, ',')
      .replace(/s:[0-9]{1,9999}:"cfdb7_status",s:[0-9]{1,9999}/g, '"cfdb7_status"')
      .replace(/s:[0-9]{1,9999}:"formName",s:[0-9]{1,9999}/g, '"formName"')
      .replace(/s:[0-9]{1,9999}:"company",s:[0-9]{1,9999}/g, '"company"')
      .replace(/s:[0-9]{1,9999}:"email",s:[0-9]{1,9999}/g, '"email"')
      .replace(/s:[0-9]{1,9999}:"phone",s:[0-9]{1,9999}/g, '"phone"')
      .replace(/s:[0-9]{1,9999}:"option",s:[0-9]{1,9999}/g, '"option"')
      .replace(/s:[0-9]{1,9999}:"comments",s:[0-9]{1,9999}/g, '"comments"')
      .replace(',}', '}')

    const formated = JSON.parse(newValue)

    return {
      id: entry.id,
      date: entry.date,
      ...formated
    }
  })

  return res
}
