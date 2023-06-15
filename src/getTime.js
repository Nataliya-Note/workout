export default function getTime(string) {
    const date = new Date(string);
  
    if (date.toString() === 'Invalid Date') {
      return Infinity;
    }
  
    const time = date.getTime();
  
    return time;
  }