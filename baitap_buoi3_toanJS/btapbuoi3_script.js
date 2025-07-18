// baitap_buoi3_toanJS/btapbuoi3_script.js
// Bài tập buổi 3 - Toán JavaScript

//1. Viết 1 hàm kiểm tra số nguyên tố n,
//trả về true nếu n là số nguyên tố, ngược lại trả về false
//Gợi ý: Dùng vòng lặp for, toán tử % và if.

function isPrime(n) {
    if (n <= 1) return false; // Số nguyên tố phải lớn hơn 1
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Nếu n chia hết cho i, không phải số nguyên tố
        }
    }
    return true; // Nếu không chia hết cho bất kỳ số nào, là số nguyên tố
}
console.log(isPrime(7)); // Ví dụ kiểm tra số nguyên tố
console.log(isPrime(10));

//2. Viết hàm để tính tổng số lẻ từ 1 đến n
function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { // Kiểm tra nếu i là số lẻ
            sum += i; // Cộng vào tổng
        }
    }
    return sum; // Trả về tổng các số lẻ
}
console.log(sumOddNumbers(10)); // Ví dụ tính tổng số lẻ từ 1 đến 10
console.log(sumOddNumbers(20));

//3. Cho người dùng nhập vào một mảng numbers chứa các số nguyên,
//hãy thực hiện in ra các số chẵn, tìm số lớn nhất trong mảng, và tạo 1 mảng mới
//chứa các số lớn hơn 0

function processArray(numbers) {
    const evenNumbers = [];
    let maxNumber = numbers[0];
    const positiveNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]); // Thêm số chẵn vào mảng
        }
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; // Cập nhật số lớn nhất
        }
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]); // Thêm số dương vào mảng mới
        }
    }

    return {
        evenNumbers: evenNumbers,
        maxNumber: maxNumber,
        positiveNumbers: positiveNumbers
    };
}
console.log(processArray([1, -2, 3, 4, 5, -6, 7, 8])); // Ví dụ xử lý mảng số nguyên
console.log(processArray([23,123,543,23,5,-23,-123,45-231, -65,0,0]));