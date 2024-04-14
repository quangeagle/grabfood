import React from 'react';
import Detail from './detail';

function App() {
    // Dữ liệu cho các section
    const sections = [
        {
            id: 'section1',
            name: 'Cơm gà',
            products: [
                {
                    name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                    img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
                }
            ]
        },
        {
            id: 'section2',
            name: 'Cơm Tấm',
            products: [
                {
                    name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                    img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
                }
            ]
        },
        {
            id: 'section3',
            name: 'Cơm hến',
            products: [
                {
                    name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                    img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
                }
            ]
        },
        {
            id: 'section4',
            name: 'Cơm chiên',
            products: [
                {
                    name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                    img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
                }
            ]
        },
        {
            id: 'section5',
            name: 'Bánh Xèo',
            products: [
                {
                    name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                    img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
                }
            ]
        },
        {
            id: 'section6',
            name: 'Chả Giò',
            products: [
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
              },
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                price: '60.000 VND'
              },
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
              },
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                    detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                    price: '60.000 VND'
              },
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                price: '60.000 VND'
              },
              {
                name: 'Combo Mua 1 Được 3 (bao gồm Cơm Gà Má Đùi Phủ Xốt + Canh Rong Biển + Coca M)',
                img:'3.webp', 
                detailproduct: 'Combo bao gồm cơm gà má đùi phủ xốt tuỳ chọn ăn kèm canh rong biển và coca tươi mát lạnh Dùng kèm phần ăn 01 bịch tương cà hoặc 01 bịch tương ớt ',
                price: '60.000 VND'
              }
          ]
        }
    ];

    return (
        <>
          
            <Detail sections={sections} />
        </>
    );
}

export default App;
