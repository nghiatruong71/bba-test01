# git checkout 
# git branch 
# Phạm vi của biến 
Phạm vi (scope) xác định nơi mà biến có thể truy cập
JavaScript có ba loại phạm vi:
● Block scope (khối)
● Function scope (hàm)
● Toàn cục (global)
# Break
break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức.
# Continue 
continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và
chuyển sang lần lặp tiếp theo.

# for in 
Dùng để duyệt qua các thuộc tính (properties) của một object.
# for each
Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng break hoặc continue.
# Utils = tiện ích
Utils function là các hàm có sẵn của JavaScript, giúp việc code trở nên
nhanh hơn, gọn hơn.
- trim 
- toUpperCase 
- toLowerCase
- split 
- replace
# Tổng quan các loại thao tác với mảng:
● Thêm phần tử vào mảng (push, unshift, splice)
● Xóa phần tử khỏi mảng (pop, shift, splice)
● Tìm kiếm (find, filter)
● Biến đổi mảng (map)
● Sắp xếp mảng (sort)

# Thêm phần tử vào mảng
● Thêm vào cuối:
push(<phần tử>)
● Thêm vào đầu:
unshift(<phần tử>)
● Thêm vào giữa: splice(<vị trí>,
<số phần tử cần
xoá>, <phần tử cần
thêm vào>).
# Xóa phần tử khỏi mảng
● Xóa ở cuối: pop()
● Xóa ở đầu: shift()
● Xóa ở vị trí bất kỳ:
splice(<vị trí>,<số phần tử cần xóa>)
# Tìm kiếm phần tử
● Trả về phần tử đầu
tiên hợp lệ - find()
● Trả về tất cả các phần
tử hợp lệ - filter()

# Biến đổi mảng
● map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
# Sắp xếp mảng
● sort((a, b) => a -b)