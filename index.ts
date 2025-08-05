const onChangePriceToKorean = (val: number) => {
    const check = 10000;
    const newVal = val / check;
    const unitWords = ['조 ', '억 ', '만'];
    const maxLength = Math.ceil(newVal.toString().length / 4);
    const result = unitWords.map((word, idx) => {
        const newIndex = idx === 2 ? 0 : !idx ? 2 : idx;
        const rest =
            maxLength > newIndex && Math.floor((newVal % Math.pow(check, newIndex + 1)) / Math.pow(check, newIndex))
                ? `${Math.floor((newVal % Math.pow(check, newIndex + 1)) / Math.pow(check, newIndex))}${word}`
                : '';
        return `${rest}`;
    });
    return result.join('');
};

const convertPhoneNumber = (number:any) => {
    let result = '';
    if (!isNaN(number)) {
        if (number.length === 11) {
            result = number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        } else if (number.length === 8) {
            result = number.replace(/(\d{4})(\d{4})/, '$1-$2');
        } else {
            if (number.indexOf('02') === 0) {
                result = number.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            } else {
                result = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }
    } else {
        result = '-';
    }
    return result;
};

function checkNum(val:string) {
  const regex = /[^0-9]/g;
  const result = val.replace(regex, "");
  return result
}

function addNum(a:number,b:number) {
  return a+b;
}

function addNum2(a:number,b:number) {
  return a-b
}

export {addNum,addNum2,checkNum,onChangePriceToKorean,convertPhoneNumber}