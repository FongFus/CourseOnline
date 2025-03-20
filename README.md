# CourseOnline - Django Project

## Giới thiệu
CourseOnline là một ứng dụng web được xây dựng bằng Django, hỗ trợ các chức năng học tập trực tuyến. Dự án sử dụng Django REST Framework để xây dựng API và MySQL/PostgreSQL làm cơ sở dữ liệu.

## Hướng dẫn cài đặt

### 1. Clone dự án từ GitHub
Sao chép repository về máy của bạn bằng lệnh:
```sh
git clone <repository_url>
```
Điều hướng vào thư mục dự án:
```sh
cd CourseOnline
```

### 2. Tạo và kích hoạt môi trường ảo

#### Trên Windows
Tạo môi trường ảo:
```sh
python -m venv .venv
```
Kích hoạt môi trường ảo:
```sh
.venv\Scripts\activate
```

#### Trên Linux/MacOS
Tạo môi trường ảo:
```sh
python3 -m venv .venv
```
Kích hoạt môi trường ảo:
```sh
source .venv/bin/activate
```

### 3. Cài đặt các thư viện cần thiết
Cài đặt các thư viện từ tệp `requirements.txt`:
```sh
pip install -r requirements.txt
```
Nếu chưa có tệp `requirements.txt`, cài đặt thủ công các thư viện cần thiết:
```sh
pip install django djangorestframework mysqlclient
```
Sau đó, đóng gói lại dependencies để tạo tệp `requirements.txt`:
```sh
pip freeze > requirements.txt
```

### 4. Cấu hình cơ sở dữ liệu
Mở file `settings.py` trong thư mục dự án và cập nhật thông tin kết nối với MySQL/PostgreSQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Hoặc 'django.db.backends.postgresql'
        'NAME': '<database_name>',
        'USER': '<username>',
        'PASSWORD': '<password>',
        'HOST': 'localhost',
        'PORT': '3306',  # PostgreSQL có thể là '5432'
    }
}
```
Thay `<database_name>`, `<username>`, `<password>` bằng thông tin cụ thể của bạn.

Đảm bảo MySQL/PostgreSQL đã được cài đặt và đang chạy trên máy.

### 5. Quản lý cơ sở dữ liệu
- Tạo migrations:
```sh
python manage.py makemigrations
```
- Chạy migration:
```sh
python manage.py migrate
```
- Tạo superuser:
```sh
python manage.py createsuperuser
```
Nhập thông tin username, email, và password theo hướng dẫn.

### 6. Chạy ứng dụng Django
Khởi động server phát triển:
```sh
python manage.py runserver
```
Ứng dụng sẽ chạy trên địa chỉ: [http://127.0.0.1:8000](http://127.0.0.1:8000)

### 7. Các lệnh quan trọng khác
- Thu thập static files:
```sh
python manage.py collectstatic
```
- Kiểm tra ứng dụng:
```sh
python manage.py test
```
- Mở shell Django:
```sh
python manage.py shell
```

## Hướng dẫn làm việc với GitHub

### 1. Kiểm tra trạng thái dự án
Kiểm tra trạng thái các thay đổi trong dự án:
```sh
git status
```

### 2. Thêm thay đổi vào staging area
Thêm toàn bộ thay đổi:
```sh
git add .
```
Hoặc thêm một file cụ thể:
```sh
git add <file_name>
```

### 3. Commit thay đổi
Lưu lại thay đổi với một thông điệp:
```sh
git commit -m "Mô tả thay đổi của bạn"
```

### 4. Đẩy thay đổi lên GitHub
Đẩy các thay đổi lên repository:
```sh
git push origin <branch_name>
```

### 5. Lấy thay đổi mới nhất từ GitHub
Cập nhật dự án của bạn với các thay đổi mới nhất từ repository:
```sh
git pull origin <branch_name>
```

## Ghi chú
- Luôn kích hoạt môi trường ảo trước khi cài đặt thư viện hoặc chạy ứng dụng.
- Sau khi cài đặt thêm thư viện mới, hãy cập nhật `requirements.txt`:
```sh
pip freeze > requirements.txt
```

## Liên hệ
- **Nguyen Phong Phu**
  - Email: [npphus@gmail.com](mailto:npphus@gmail.com)
  - GitHub: [github.com/fongfus](https://github.com/fongfus)