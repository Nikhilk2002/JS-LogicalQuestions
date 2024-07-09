
var expect = function (value) {
    const errorMessege = (messege) => {
        throw new Error(messege)
    }
    return {
        toBe: (number) => {

            return value === number ? true : errorMessege("Not Equal ")
        },
        notToBe: (number) => {
            return value !== number ? true : errorMessege("Equal")
        }
    }
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));