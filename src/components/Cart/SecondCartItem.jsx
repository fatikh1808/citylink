import React from "react";

const SecondCartItem = (props) => {

    const {
        item
    } = props;

    return (
        <div className={'product_info_container'} key={item.id}>
            <div className={'image_container_second'}>
                <img
                    className={'product_info_img_img'}
                    src={item.item.mainImg}
                    alt="123456"
                />
            </div>
            <div className={'name_container_second'}>
                {item.item.id} {item.item.name}
            </div>
            <div className={'parse_container_second'}>
                {item.countItem} шт.
            </div>
            <div className={'price_container_second'}>
                {item.item.price * item.countItem} p
            </div>
        </div>
    )
}

export default SecondCartItem;