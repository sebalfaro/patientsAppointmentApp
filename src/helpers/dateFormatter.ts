
const dateFormatter = (date: Date): string => {
  const nuevaFecha: Date = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return nuevaFecha.toLocaleDateString('es-ES', options)
}

export default dateFormatter