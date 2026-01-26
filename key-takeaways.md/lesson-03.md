git commit --amend: dùng để sửa commit 
git commit --amend -m"<message>": đổi nhanh commit message gần nhất
git restore --staged <file >: dùng để bỏ file khỏi staging area
git reser HEAD~1: để xoá commit gần nhất , clear tren staging area
------------------------------------------------
a. tạo 3 file file1, file2, file3: tạo 3 file trên Working Directory
b. Chạy lênh: git init: Dùng để khởi tạo một Git repository mới trong thư mục hiện tại.
c chạy lệnh: git commit -m"init project": 
- Lệnh này không có tác dụng vì chưa có file nào được add vào Staging Area.
- Working Directory: file1, file2, file3
- Staging Area: (trống)
- Repository: không có commit mới
d. chạy lệnh: git add file1 : 
- Working Directory: file1, file2, file3
- Staging Area: file1
- Repository: chưa thay đổi
e. Chạy lệnh git commit -m"add file"
- Working Directory: file1, file2, file3
- Staging Area: (trống)
- repository: file 1 đã được commit 
f. Chạy lệnh git add . 
- Working Directory: file1, file2, file3
- Staging Area: file2, file3
- Repository: chưa thay đổi
g. Chạy lệnh git restore --staged file2
- Working Directory: file1, file2, file3
- Staging Area: file3
- Repository: chưa thay đổi
h. Chay lệnh: git commit -m"add all files"
- Working Directory: file1, file2, file3
- Staging Area: trống
- Repository: file3 được commit
i. git reset HEAD~1:
- Repository: xoá commit file 3
# Convention 
- snake_case
- kebab-case
- camelCase 
# Object 
Object = đối tượng, dùng để lưu trữ tập hợp
các giá trị vào cùng một biến hoặc hằng số
# Array
