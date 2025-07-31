import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/PaymentSuccess.css';
import '../assets/css/editproduct.css';
interface PaymentSuccessProps {
  onClose?: () => void; // optional: cho phép đóng modal nếu cần
}

interface SuccessPageProps {
  message?: string;
  description?: string;
  buttonText?: string;
  onClose?: () => void;   // ✅ Đóng modal mà không cần navigate
}

interface ConfirmDeleteProps {
  message?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ContactSuccess: React.FC<PaymentSuccessProps> = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="payment-success-overlay">
      <div className="payment-success-modal">
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}

        {/* ✅ SVG vẽ dấu V */}
        <svg className="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
          <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark-check" d="M14 27 L22 35 L38 18" fill="none" />
        </svg>

        <h2>Gửi lời nhắn thành công!</h2>
        <p>Cảm ơn sự góp ý của bạn.</p>
        <button onClick={() => navigate('/')}>Tiếp tục mua sắm</button>
        <br />
        <br />
        {/* <p style={{color:"black"}}>bạn có thể xem đơn hàng của mình tại đây</p> <Link to={'/order'} ><p style={{color:"black"}}> tại đây </p></Link> */}
      </div>
    </div>
  );
};

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="payment-success-overlay">
      <div className="payment-success-modal">
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}

        {/* ✅ SVG vẽ dấu V */}
        <svg className="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
          <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark-check" d="M14 27 L22 35 L38 18" fill="none" />
        </svg>

        <h2>Thanh toán thành công!</h2>
        <p>Đơn hàng của bạn đã được xử lý.</p>
        <button onClick={() => navigate('/')}>Quay về trang chủ</button>
        <br />
        <br />
        <p style={{color:"black"}}>bạn có thể xem đơn hàng của mình tại đây</p> <Link to={'/order'} ><p style={{color:"black"}}> tại đây </p></Link>
      </div>
    </div>
  );
};

export const SuccessPage: React.FC<SuccessPageProps> = ({
  message = 'Cập nhật thành công',
  description = 'Hành động của bạn đã được xử lý.',
  buttonText = 'Đóng',
  onClose,
}) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <button className="close-btn" onClick={onClose}>×</button> {/* ✅ Không dùng navigate */}

        <div className="success-icon">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="36" fill="#4CAF50" />
            <path d="M22 37 L32 47 L52 27" stroke="#fff" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>

        <button className="success-button" onClick={onClose}>
          {buttonText}
        </button>

        <p className="success-link">Cập nhật sản phẩm thành công</p>
      </div>
    </div>
  );
};

export const CreateProductSuccess: React.FC<SuccessPageProps> = ({   
  message,
  description,
  buttonText,
  onClose 
}) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="success-icon">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="36" fill="#4CAF50" />
            <path d="M22 37 L32 47 L52 27" stroke="#fff" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>

        <button className="success-button" onClick={onClose}>
          {buttonText}
        </button>
      </div>
      <style {...({ jsx: true } as any)}>{`
      .payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.payment-success-modal {
  background: #fff;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.payment-success-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
  margin-top: 0px;
  right: 0px;
  top: 0px;
}
.payment-success-modal .close-btn:hover {
  color: #000;
}
.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  background-color: #4CAF50;
  stroke-miterlimit: 10;
  margin: 0 auto 20px;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke: #4CAF50;
  stroke-width: 3;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  display: none;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: stroke 0.4s ease-in-out 0.6s forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  to {
    box-shadow: inset 0 0 0 30px #4CAF50;
  }
}

.payment-success-modal button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.payment-success-modal p {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.success-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  margin-bottom: 20px;
}

.success-message {
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-description {
  color: #666;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.success-button:hover {
  background-color: #43a047;
}

.success-link {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-box {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.success-message {
  font-size: 24px;
  color: #4CAF50;
  margin: 16px 0 8px;
}

.success-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.token-expired-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.token-expired-modal {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.token-expired-modal h2 {
  margin-bottom: 10px;
  color: #d32f2f;
}

.token-expired-modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.token-expired-modal button {
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.token-expired-modal button:hover {
  background-color: #b71c1c;
}
      `}</style>
    </div>
  );
};

export const DeleteProductSuccess: React.FC<SuccessPageProps> = ({   
  message,
  description,
  buttonText,
  onClose }) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="success-icon">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="36" fill="#4CAF50" />
            <path d="M22 37 L32 47 L52 27" stroke="#fff" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>

        <button className="success-button" onClick={onClose}>
          {buttonText}
        </button>
      </div>
            <style {...({ jsx: true } as any)}>{`
.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.success-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  margin-bottom: 20px;
}

.success-message {
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-description {
  color: #666;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.success-button:hover {
  background-color: #43a047;
}

.success-link {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-box {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.success-message {
  font-size: 24px;
  color: #4CAF50;
  margin: 16px 0 8px;
}

.success-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.token-expired-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.token-expired-modal {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.token-expired-modal h2 {
  margin-bottom: 10px;
  color: #d32f2f;
}

.token-expired-modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.token-expired-modal button {
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.token-expired-modal button:hover {
  background-color: #b71c1c;
}
      `}</style>
    </div>
  );
};

export const UpdateProductSuccess: React.FC<SuccessPageProps> = ({ 
  message,
  description,
  buttonText,
  onClose }) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="success-icon">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="36" fill="#4CAF50" />
            <path d="M22 37 L32 47 L52 27" stroke="#fff" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>

        <button className="success-button" onClick={onClose}>
          {buttonText}
        </button>
      </div>
            <style {...({ jsx: true } as any)}>{`
.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.success-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  margin-bottom: 20px;
}

.success-message {
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-description {
  color: #666;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.success-button:hover {
  background-color: #43a047;
}

.success-link {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-box {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.success-message {
  font-size: 24px;
  color: #4CAF50;
  margin: 16px 0 8px;
}

.success-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.token-expired-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.token-expired-modal {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.token-expired-modal h2 {
  margin-bottom: 10px;
  color: #d32f2f;
}

.token-expired-modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.token-expired-modal button {
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.token-expired-modal button:hover {
  background-color: #b71c1c;
}
  .payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.payment-success-modal {
  background: #fff;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.payment-success-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
  margin-top: 0px;
  right: 0px;
  top: 0px;
}
.payment-success-modal .close-btn:hover {
  color: #000;
}
.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  background-color: #4CAF50;
  stroke-miterlimit: 10;
  margin: 0 auto 20px;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke: #4CAF50;
  stroke-width: 3;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  display: none;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: stroke 0.4s ease-in-out 0.6s forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  to {
    box-shadow: inset 0 0 0 30px #4CAF50;
  }
}

.payment-success-modal button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.payment-success-modal p {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
      `}</style>
    </div>
  );
};

export const ConfirmDeleteDialog: React.FC<ConfirmDeleteProps> = ({
  message = 'Bạn có chắc chắn muốn xóa?',
  description = 'Hành động này không thể hoàn tác.',
  confirmText = 'Xác nhận',
  cancelText = 'Hủy',
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="success-container">
      <div className="success-box">
        <button className="close-btn" onClick={onCancel}>×</button>

        <div className="success-icon">
          <svg width="72" height="72" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="36" fill="#F44336" />
            <path d="M22 22 L50 50 M50 22 L22 50" stroke="#fff" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <h2 className="success-message">{message}</h2>
        <p className="success-description">{description}</p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="success-button" style={{ backgroundColor: '#F44336' }} onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="success-button" onClick={onCancel}>
            {cancelText}
          </button>
        </div>
      </div>
            <style {...({ jsx: true } as any)}>{`
.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.success-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  margin-bottom: 20px;
}

.success-message {
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-description {
  color: #666;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.success-button:hover {
  background-color: #43a047;
}

.success-link {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-box {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.success-message {
  font-size: 24px;
  color: #4CAF50;
  margin: 16px 0 8px;
}

.success-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.token-expired-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.token-expired-modal {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.token-expired-modal h2 {
  margin-bottom: 10px;
  color: #d32f2f;
}

.token-expired-modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.token-expired-modal button {
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.token-expired-modal button:hover {
  background-color: #b71c1c;
}
  .payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.payment-success-modal {
  background: #fff;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.payment-success-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
  margin-top: 0px;
  right: 0px;
  top: 0px;
}
.payment-success-modal .close-btn:hover {
  color: #000;
}
.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  background-color: #4CAF50;
  stroke-miterlimit: 10;
  margin: 0 auto 20px;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke: #4CAF50;
  stroke-width: 3;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  display: none;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: stroke 0.4s ease-in-out 0.6s forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  to {
    box-shadow: inset 0 0 0 30px #4CAF50;
  }
}

.payment-success-modal button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.payment-success-modal p {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
      `}</style>
    </div>
  );
};

export const TokenExpiredModal: React.FC<ConfirmDeleteProps> = ({ onConfirm }) => {
  return (
    <div className="token-expired-overlay">
      <div className="token-expired-modal">
        <h2>Phiên đăng nhập đã hết hạn</h2>
        <p>Vui lòng đăng nhập lại để tiếp tục.</p>
        <button onClick={onConfirm}>Đăng nhập lại</button>
      </div>
            <style {...({ jsx: true } as any)}>{`
            .payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.payment-success-modal {
  background: #fff;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.payment-success-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
  margin-top: 0px;
  right: 0px;
  top: 0px;
}
.payment-success-modal .close-btn:hover {
  color: #000;
}
.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  background-color: #4CAF50;
  stroke-miterlimit: 10;
  margin: 0 auto 20px;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke: #4CAF50;
  stroke-width: 3;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  display: none;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: stroke 0.4s ease-in-out 0.6s forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  to {
    box-shadow: inset 0 0 0 30px #4CAF50;
  }
}

.payment-success-modal button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.payment-success-modal p {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
  
.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.success-box {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  text-align: center;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

.success-icon {
  margin-bottom: 20px;
}

.success-message {
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: bold;
}

.success-description {
  color: #666;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.success-button:hover {
  background-color: #43a047;
}

.success-link {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-box {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.success-message {
  font-size: 24px;
  color: #4CAF50;
  margin: 16px 0 8px;
}

.success-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.success-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.token-expired-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.token-expired-modal {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.token-expired-modal h2 {
  margin-bottom: 10px;
  color: #d32f2f;
}

.token-expired-modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.token-expired-modal button {
  padding: 10px 20px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.token-expired-modal button:hover {
  background-color: #b71c1c;
}
  .payment-success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.payment-success-modal {
  background: #fff;
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.payment-success-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
  margin-top: 0px;
  right: 0px;
  top: 0px;
}
.payment-success-modal .close-btn:hover {
  color: #000;
}
.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  background-color: #4CAF50;
  stroke-miterlimit: 10;
  margin: 0 auto 20px;
  animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke: #4CAF50;
  stroke-width: 3;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  display: none;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  stroke: #fff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: stroke 0.4s ease-in-out 0.6s forwards;
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  to {
    box-shadow: inset 0 0 0 30px #4CAF50;
  }
}

.payment-success-modal button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.payment-success-modal p {
  font-size: 14px;
  color: #444;
  margin-top: 10px;
}
      `}</style>
    </div>
  );
};