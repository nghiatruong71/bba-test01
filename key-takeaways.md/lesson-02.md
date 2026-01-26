1. git init
- Dùng để khởi tạo một Git repository mới trong thư mục hiện tại.

2. git add <file_name>
- Dùng để đưa một file cụ thể từ Working Directory vào Staging Area.

3. git add .
- Dùng để đưa tất cả các file và thay đổi hiện có trong thư mục vào Staging Area.
- Bao gồm cả file mới, file sửa, file xóa.

4. git commit -m "message"
- Dùng để lưu các thay đổi đã được add vào Git repository.
- "message" dùng để mô tả nội dung thay đổi của lần commit đó.
------------------------------------------------
a. Tạo 3 file: file1, file2, file3

- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: (chưa có commit)

b. Chạy lệnh: git init

- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: chưa có commit nào

c. Chạy lệnh: git commit -m "init project"

- Lệnh này không có tác dụng vì chưa có file nào được add vào Staging Area.
- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: không có commit mới

d. Chạy lệnh: git add file1

- Working Directory: file1, file2, file3
- Staging Area: file1
- Repository: chưa thay đổi

e. Chạy lệnh: git commit -m "add file1"

- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: file1 đã được commit

f. Chạy lệnh: git commit -m "add file"

- Lệnh này không có tác dụng vì Staging Area đang trống.
- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: không có commit mới

# JS Data type 
Một biến/hằng luôn có kiểu dữ liệu.
Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
● Kiểu nguyên thuỷ (primitive types)
○ Number
○ String
○ Boolean
○ Undefined
○ Null
○ Symbol
○ BigInt
● Kiểu tham chiếu (reference types)
○ Object

Học automation test
từ chưa biết gì JavaScript - Data Type

Một biến/hằng luôn có kiểu dữ liệu.
Kiểu dữ liệu là loại dữ liệu mà biến đó đang mang.
Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
● Kiểu nguyên thuỷ (primitive types)
○ Number
○ String
○ Boolean
○ Undefined
○ Null
○ Symbol
○ BigInt
● Kiểu tham chiếu (reference types)
○ Object

# Toán tử so sánh
Toán tử so sánh dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng
boolean
# Câu điều kiện IF
Cú pháp:
if (<điều kiện>) {
// code...
}

# Câu for 
Cú pháp vòng lặp for (i)
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}