# Learn_Redux

Redux là một framework giúp lưu trữ các state. Nó giúp ta quản lý tất cả các state trong project. Điều này giúp các màn hình hay component có thể trao đổi state với nhau 1 cách dễ dàng hơn.

# Redux cơ bản

+ Redux có 3 phần chính:
  # Action:
  Chứa các hành động. Nó bao gồm 2 thuộc tính chính là "type" và "payLoad". Type có kiểu string và nó được xem như là id của     action. PayLoad là tham số truyền lên(??).
  # Reducer:
  Là nơi nhận action và state rồi xử lý nó để trả về state mới nhưng ko làm thay đổi state cũ. Reducer có 2 tham số truyền vào   là action và state cũ.
  # Store:
  Là nơi lưu trữ và quản lý các state. Sau khi nó được khởi tạo thì ta có thể đặt nó trong "Provider" để kết nối với "view".
  # Dispatch:
  Là hành động thay thế state cũ bằng state mới. Hành động này có thể có hoặc không tuỳ trường hợp sử dụng.
  # Connect:
  Là hàm kết nối giữa component với store. Có component cần gửi state và component cần nhận state. Hàm connect có 2 tham số     truyền vào là mapDispatchToProps(dispatch) và mapStateToProps(state). Như đã nói trên thì dispatch là để thay state cũ thành   state mới nên đây là để component gửi state mới đến store để ghi đè state cũ

