type MapStringsCallback = (item:string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = []

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item === undefined) continue;
        newArray.push(callbackfn(item))
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMap = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMap);
