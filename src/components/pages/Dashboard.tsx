import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Store, LogOut, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import AdminChatComponent from './AdminChatComponent'; 
import AdminOrders from './admin/AdminOrders';
import AdminEvents from './admin/EventManagement';
import UserManager from './admin/UserManager';
import BlogManagement from './admin/BlogManagement';
import CouponManagement from './admin/CouponManagement';
import CategoryManagement from './admin/CategoryManagement';
import ProductManagement from './admin/ProductManagement';
import ReviewManagement from './admin/ReviewManager';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dashboard = () => {
  const [userCount, setUserCount] = useState<number>(0);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const token = localStorage.getItem('token');
  let adminId = '';
  if (token) {
    const decoded: any = jwtDecode(token);
    adminId = decoded.sub || decoded._id || decoded.id;
  }

  const chartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
             'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: 'Activity',
      data: [100, 150, 200, 180, 250, 220, 280, 300, 270, 320, 340, 360],
      backgroundColor: '#4f46e5',
      borderRadius: 4,
    }],
  };

  const handleChatClick = () => {
    setActiveSection('chat');
    setIsChatOpen(true);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link style={{ textDecoration: 'none' }} to="/">
          <div className="sidebar-header">🛒 Cửa Hàng Đặc Sản</div>
        </Link>
        <nav className="sidebar-menu">
          <div onClick={() => setActiveSection('dashboard')} className={activeSection === 'dashboard' ? 'menu-highlight active' : 'menu-highlight'}>📊 Báo cáo</div>
          <div onClick={handleChatClick} className={activeSection === 'chat' ? 'menu-highlight active' : 'menu-highlight'}><MessageCircle size={18} /> Khung chat</div>
          <div onClick={() => setActiveSection('users')} className={activeSection === 'users' ? 'menu-highlight active' : 'menu-highlight'}>👥 Quản lý người dùng</div>
          <div onClick={() => setActiveSection('products')} className={activeSection === 'products' ? 'menu-highlight active' : 'menu-highlight'}>📦 Quản lý sản phẩm</div>
          <div onClick={() => setActiveSection('orders')} className={activeSection === 'orders' ? 'menu-highlight active' : 'menu-highlight'}>🚚 Quản lý đơn hàng</div>
          <div onClick={() => setActiveSection('posts')} className={activeSection === 'posts' ? 'menu-highlight active' : 'menu-highlight'}>📝 Quản lý bài viết</div>
          <div onClick={() => setActiveSection('categories')} className={activeSection === 'categories' ? 'menu-highlight active' : 'menu-highlight'}>📁 Quản lý danh mục</div>
          <div onClick={() => setActiveSection('coupons')} className={activeSection === 'coupons' ? 'menu-highlight active' : 'menu-highlight'}>🏷️ Quản lý mã khuyến mãi</div>
          <div onClick={() => setActiveSection('events')} className={activeSection === 'events' ? 'menu-highlight active' : 'menu-highlight'}>🏷️ Quản lý sự kiện</div>
          <div onClick={() => setActiveSection('stores')} className={activeSection === 'stores' ? 'menu-highlight active' : 'menu-highlight'}><Store size={18} /> Gian hàng hợp tác</div>
          <div onClick={() => setActiveSection('reviews')} className={activeSection === 'reviews' ? 'menu-highlight active' : 'menu-highlight'}><Store size={18} /> Đánh giá sản phẩm</div>
          <div onClick={handleLogout} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <LogOut size={18} /> Đăng Xuất
          </div>
        </nav>
        <div className="sidebar-footer">
          <div>⚙️ Cài đặt</div>
          <div className="user-info">Hoang<br />hoang123@gmail.com</div>
        </div>
      </aside>

      <main className="main-content">
        <h1 className="title">
          {activeSection === 'dashboard' && '📈 Thống kê'}
          {activeSection === 'chat' && '💬 Khung chat'}
          {activeSection === 'posts' && '📝 Bài viết'}
          {activeSection === 'categories' && '📁 Danh mục'}
          {activeSection === 'coupons' && '🏷️ Mã khuyến mãi'}
          {activeSection === 'stores' && '🏪 Gian hàng'}
          {activeSection === 'events' && '🏷️ Quản lý sự kiện'}
          {activeSection === 'products' && '🛒 Quản lý sản phẩm'}
          {activeSection === 'reviews' && '🏪 Quản lý đánh giá'}
        </h1>

        {activeSection === 'dashboard' && (
          <>
            <div className="filters">
              <select><option value="all">Thời gian: Từ trước tới nay</option></select>
              <select><option value="all">Nhóm Khách Hàng: Tất cả</option></select>
              <select><option value="all">Mặt hàng: Tất cả</option></select>
            </div>

            <div className="n1">
              <div className="stats-grid">
                <StatCard title="Người dùng" value={`${userCount} người`} />
                <StatCard title="Câu hỏi" value="3,298" />
                <StatCard title="Số lượt đánh giá" value="5,000" />
                <StatCard title="Tổng doanh thu" value="2,000,000 VNĐ" />
                <StatCard title="Mức tăng trưởng" value="3%" />
                <StatCard title="Đơn hàng chờ" value="2,000" />
              </div>

              <div className="charts-grid">
                <div className="full-span">
                  <div className="n2">
                    <h2>Báo cáo</h2>
                    <select>
                      <option value="ngay">Ngày</option>
                      <option value="thang">Tháng</option>
                      <option value="nam">Năm</option>
                    </select>
                  </div>
                  <Bar data={chartData} />
                </div>
              </div>
            </div>

            <div className="n3">
              <div className="card2">
                <h2>Chủ đề hot</h2>
                <Progress label="trái cây" percent={95} image="/images/top/Rectangle 2370.png" />
                <Progress label="quà lưu niệm" percent={92} image="/images/top/Rectangle 2370.png" />
                <Progress label="đồ ăn khô" percent={89} image="/images/top/Rectangle 2370.png" />
              </div>

              <div className="bottom-grid">
                <div className="card1">
                  <h2>Top sản phẩm</h2>
                  <Progress label="Food Safety" percent={74} color="red" />
                  <Progress label="Compliance Basics Procedures" percent={52} color="yellow" />
                  <Progress label="Company Networking" percent={36} color="pink" />
                </div>
              </div>
            </div>

            <div className="card">
              <h2>Bảng xếp hạng người dùng</h2>
              <div className="ranking">
                <div>A - 92% Correct <span className="up">▲</span></div>
                <div>B - 89% Correct <span className="down">▼</span></div>
              </div>
            </div>
          </>
        )}

        {activeSection === 'products' && <ProductManagement />}
        {activeSection === 'events' && <AdminEvents />}
        {activeSection === 'orders' && <AdminOrders />}
        {activeSection === 'posts' && <BlogManagement />}
        {activeSection === 'users' && <UserManager />}
        {activeSection === 'categories' && <CategoryManagement />}
        {activeSection === 'coupons' && <CouponManagement />}
        {activeSection === 'reviews' && <ReviewManagement />}
        {activeSection === 'chat' && isChatOpen && (
          <AdminChatComponent adminId={adminId} onClose={() => setIsChatOpen(false)} />
        )}
      </main>

      <style jsx>{`
        /* Gộp tất cả CSS ở đây */
        .dashboard {
          display: flex;
          min-height: 100vh;
          background: #f9fafb;
          color: #1f2937;
        }

        /* .sidebar {
  width: 16rem;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: #ea580c;
  border-bottom: 1px solid #e5e7eb;
}

.sidebar-menu  {
  flex: 1;
  padding: 1rem;
  font-size: 0.875rem;
  height: 100px;
  cursor: pointer;
}

.sidebar-menu div{
  flex: 1;
  padding: 1rem;
  font-size: 0.875rem;
}

.menu-highlight {
  font-weight: 600;
  color: #2563eb;
}

.sidebar-footer {
  font-size: 0.75rem;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
}

.user-info {
  margin-top: 0.5rem;
}

.main-content {
  flex: 1;
  padding: 1.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.filters select {
  margin-right: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.stats-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  font-size: 0.875rem;
  width: 800px;
}

.card12{
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  cursor: pointer;
  
}

.card-title {
  color: #6b7280;
}

.card-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: black;
}

.charts-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.bottom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.progress-item {
  margin-bottom: 1rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.progress-bar {
  width: 100%;
  background: #e5e7eb;
  height: 0.5rem;
  border-radius: 9999px;
}

.progress-fill {
  height: 0.5rem;
  border-radius: 9999px;
}

.progress-fill.green { background-color: #10b981; }
.progress-fill.red { background-color: #ef4444; }
.progress-fill.yellow { background-color: #facc15; }
.progress-fill.pink { background-color: #ec4899; }

.ranking {
  font-size: 0.875rem;
}

.up { color: #10b981; }
.down { color: #ef4444; }
.n1{
  display: flex;
 justify-content: space-between;
 margin-bottom: 30px;
}
.menu a{
  cursor: pointer;
}
.charts-grid{
  width: 500px;
  justify-content: center;
  margin-top: -50px;
}
.full-span {
  width: 400px;
  height: 200px;
  margin-left: 50px;
}
.n2 select{
  width: 100px;
  height: 20px;
  margin-top: 0px;
  border-radius: 10px;
  font-size: 13px;
  border: none;
  cursor: pointer;
  background-color: none;
}
.n2{
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.filters select{
  width: 250px;
  font-size: 13px;
  margin-bottom: 20px;
}
.n3{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

}
.n3 .card2{
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  width: 400px;
  cursor: pointer;
}
.n3 .card2:hover {
  transform: translateY(-6px); /* nổi lên nhẹ khi hover */
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2); /* bóng đổ mạnh hơn khi hover */
}

.n3 .card1{
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  width: 400px;
  margin-top: -24px;
  cursor: pointer;
}
.n3 .card1:hover {
  transform: translateY(-6px); /* nổi lên nhẹ khi hover */
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2); /* bóng đổ mạnh hơn khi hover */
}
.user-table thead{
  justify-content: space-between;
}
.box3{
  border: 1px solid bla;
}
.user-card0 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

.user-infor2 {
  display: flex;
  flex: 1;
  gap: 20px;
}

.avatar-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.user-details1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-name1 {
  color: #2ecc71;
  font-size: 22px;
  margin-bottom: 10px;
}

.user-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-edit {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.sp-section {
  padding: 16px;
}

.sp-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
}

.sp-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.sp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.sp-info {
  display: flex;
  gap: 16px;
}

.sp-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.sp-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sp-content p {
  margin: 2px 0;
  font-size: 14px;
  color: #333;
  line-height: 1.4;
  max-width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sp-name {
  color: #28a745;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
}

.sp-actions {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;
}

.sp-btn-edit {
  background-color: #007bff;
  color: white;
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sp-btn-edit:hover {
  background-color: #0056b3;
}

.sp-btn-delete {
  background-color: #dc3545;
  color: white;
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sp-btn-delete:hover {
  background-color: #b52a3a;
}

/* Responsive */
@media (max-width: 768px) {
  .sp-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .sp-actions {
    flex-direction: row;
    gap: 12px;
    margin-top: 12px;
  }

  .sp-img {
    width: 100%;
    height: auto;
    max-height: 200px;
  }
}
.add{
  width: auto;
 background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add0{
  display: flex;
  justify-content: flex-end;
  margin-right: 12px;
}
.sp-section h2{
  color: none;
  display: flex;
  justify-content: center;
}
.sp-info img{
  width: 160px;
  height: 160px;
}
/* // highitlight */
.sidebar-menu .menu-highlight {
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: black;
}

.sidebar-menu .menu-highlight:hover {
  background-color: #f1f1f1;
}

.sidebar-menu .menu-highlight.active {
  background-color: #4CAF50; /* Màu xanh active */
  color: #fff;
  font-weight: bold;
}
/* sửa sản phẩm form  */
.edit-product-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-save {
  background: #28a745;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-cancel {
  background: #ccc;
  color: #000;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn-success{
 background: #28a745;
  color: white;
}
.form-actions1 {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.btn-secondary{
  background-color: red;
  color: white;
}

.sub-event-form {
  background: #f8f8f8;
  padding: 12px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.sp-btn-sub {
  background-color: #15ac22ff;
  color: white;
  padding: 6px 12px;
  margin-top: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
 */
      `}</style>
    </div>
  );
};

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="card12">
    <div className="card-title">{title}</div>
    <div className="card-value">{value}</div>
  </div>
);

const Progress = ({
  label,
  percent,
  color = 'green',
  image,
}: {
  label: string;
  percent: number;
  color?: string;
  image?: string;
}) => (
  <div className="progress-item">
    <div className="progress-label">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {image && (
          <img
            src={image}
            alt={label}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              objectFit: 'cover',
            }}
          />
        )}
        <span>{label}</span>
      </div>
      <span>{percent}%</span>
    </div>
    <div className="progress-bar">
      <div
        className={`progress-fill ${color}`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

export default Dashboard;
