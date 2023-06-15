export default function getFormattedDate(string) {
    const date = new Date(string);
  
    if (date.toString() === 'Invalid Date') {
      return null;
    }
  
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
  
    return formattedDate;
  }