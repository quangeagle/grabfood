import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Header from './header';

const Detail = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isCartOpen, setCartOpen] = useState(false);

    const handleMenuItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const offset = 200;
        for (const section of sections) {
            const sectionId = section.id;
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                const top = sectionElement.getBoundingClientRect().top;
                if (top < offset && top > -sectionElement.offsetHeight) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    const openCart = () => {
        setCartOpen(true);
    };

    const closeCart = () => {
        setCartOpen(false);
    };

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isCartOpen]);

    return (
        <>
            {/* Header và overlay */}
            <Header />
            <div className={`overlay ${isCartOpen ? 'show' : ''}`} onClick={closeCart}></div>

            {/* Main content */}
            <div className='big'>
                <nav className='nav1'>
                    <ul>
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                onClick={() => handleMenuItemClick(section.id)}
                                className={activeSection === section.id ? 'active' : ''}
                            >
                                {section.name}
                            </li>
                        ))}
                    </ul>
                </nav>
                 <div className='eagle'>
                 {sections.map((section) => (
                    <div key={section.id} id={section.id}>
                        <h2>{section.name}</h2>
                        <div className="detail">
                            {section.products.map((product) => (
                                <div key={product.name} className="product">
                                    <div className='app-container'>
                                        <div className='app-container1'>
                                        <img src={product.img} alt={product.name} />
                                        </div>
                                        <div className='app-container2'>
                                        <p>{product.name}</p>
                                        <p>{product.detailproduct}</p>
                                        <div>
                                        <p>{product.price}</p>
                                        <button onClick={openCart}><FontAwesomeIcon icon={faPlus} /></button>

                                        </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                 </div>
               
            </div>

            {/* Giỏ hàng */}
            <div className={`cart ${isCartOpen ? 'open' : ''}`}>
<button onClick={closeCart}>X</button>
<div className='SanPham'>

 <img src="1.jpg"/>
 <div className='SanPham1'>
    <h3>Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)</h3>
    <p>Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt</p>

 </div>
 <p>45.000</p>
</div>
<div className='CheckBox'>
    <h3>Sốt cơm gà</h3>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
</div>
<div className='CheckBox'>
    <h3>Sốt cơm gà</h3>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
</div>
<div className='CheckBox'>
    <h3>Sốt cơm gà</h3>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
</div>
<div className='CheckBox'>
    <h3>Sốt cơm gà</h3>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
</div>
<div className='CheckBox'>
    <h3>Sốt cơm gà</h3>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
    <div className='CheckBoxMiNi'>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
    <label for="vehicle2"> Sốt mắm tỏi</label><br/>
    </div>
</div>
{isCartOpen && (
                <div className='bag2'>
                    <button className='buttondathang'>Mua Hàng</button>
                </div>
            )}
</div>

        </>
    );
};

export default Detail;



