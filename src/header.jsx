
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBagShopping, faStar, faClock, faTicket,faCalendar,faAngleDown} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    const [time1, setTime1] = useState(""); // Khởi tạo state cho thời gian đã chọn trong dropdown menu 1
    const [time2, setTime2] = useState(""); // Khởi tạo state cho thời gian đã chọn trong dropdown menu 2

    const handleChange1 = (event) => {
        setTime1(event.target.value); // Cập nhật state khi giá trị của dropdown thay đổi
    };

    const handleChange2 = (event) => {
        setTime2(event.target.value); // Cập nhật state khi giá trị của dropdown thay đổi
    };
    const handleFocus = () => {
        setSelected(true);
    };

    const handleBlur = () => {
        setSelected(false);
    };
    return (
        <header>
            <div className="header_detail">
                <div className='logo'>
                    <img src="1.png" alt="Grab" hidden="" />
                    <input type="text" />
                </div>

                <div className='bag'>
                    <p> <FontAwesomeIcon icon={faBagShopping} /> </p>
                    <p>Đăng nhập / Đăng kí</p>
                 
                </div>
            </div>
            

            <div className='restaurant'>
                <p>Trang Chủ </p>
                <p><FontAwesomeIcon icon={faChevronRight}  /> </p>
                <p>Nhà Hàng</p>
                <p><FontAwesomeIcon icon={faChevronRight}  /> </p>
                <p>Tiệm cơm gà AMT Tân kì - Tân quý</p>
            </div>
            <div className='all'>
            <p className='name_store'>Tiệm Cơm Gà AMT -Tân kì Tân quý</p>
            <p className='rice'>Rice</p>

            <div className='DanhGia'>
                <div>
                    <p><FontAwesomeIcon icon={faStar} color="yellow" /> </p>
                    <p>5.0</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faClock} /> </p>
                    <p>25 phút</p>
                    <p>. 1.8km</p>
                </div>
                </div>
                <div className='Clock'>
                    <p>Giờ mở cửa</p>
                    <p>Hôm nay 00:00-02:00 07:00-23:59</p>
                </div>
                <div className='voucher1'>
                    <p><FontAwesomeIcon icon={faTicket} color="blue" /> </p>
                    <p>Nhận Kem Oreo Phô mai miễn phí với đơn hàng tối thiểu 149.000₫</p>
                </div>
                <div className='Voucher2'>
                    <p><FontAwesomeIcon icon={faTicket} color="blue" /> </p>
                    <p>Giảm 15.000₫ phí giao hàng với đơn hàng tối thiểu 200.000₫</p>
                </div>
            

                <div className='calendar'>
                    <div className='calendericon'>
                        
                        <label className='label'>
                        <p className='icon'><FontAwesomeIcon icon={faCalendar} /> </p>
                            <select className='seclect' value={time1} onChange={handleChange1}>
                                <option value="">Chọn Ngày giao hàng: Hôm nay</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </label>
                    </div>
                    <div className='calendericon'>
                        <label className='label'>
                        <p className='icon'><FontAwesomeIcon icon={faClock} /> </p>
                            <select className='seclect' value={time2} onChange={handleChange2}>
                                
                                <option value="">Chọn thời gian: Ngay bây giờ</option>
                                <option value="08:00-9:00">08:00-8:30</option>
                                <option value="08:30-9:00">08:30-9:00</option>
                                <option value="09:00-9:30">09:00-9:30</option>
                                <option value="10:00-10:30">10:00-10:30</option>
                                <option value="10:30-11:00">10:30-11:00</option>
                                <option value="11:00-11:30">11:00-11:30</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
           
               
        
        </header>
    );
}

export default Header;

