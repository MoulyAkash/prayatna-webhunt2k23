import axios from 'axios';

const fetchData: any = async (coin: string) => {
    const url = 'https://api.wazirx.com/sapi/v1/ticker/24hr?symbol='+coin+'inr'
    let obj;
    await axios.get(url).then((response) => {
        obj = response.data;
        console.log(obj);
    }).catch((err) => {
        console.log("ERROR: ", err)
    });
    return obj;
}

export default fetchData