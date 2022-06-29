const CartList = ({ cartState, setCartState }) => {
    const handleDecreaseClick = (idx) => {
        if (cartState[idx].count === 1) {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
            return;
        }
        const newCartState = [...cartState];
        newCartState[idx].count -= 1;
        setCartState(newCartState);
    };

    const handleIncreaseClick = (idx) => {
        if (cartState[idx].count === 10) {
            alert('장바구니에 담을 수 있는 최대 수량은 10개입니다.');
            return;
        }
        const newCartState = [...cartState];
        newCartState[idx].count += 1;
        setCartState(newCartState);
    };

    const handleRemoveClick = (idx) => {
        const newCartState = [...cartState];
        newCartState.splice(idx, 1);
        setCartState(newCartState);
    };

    return (
        <>
            <ul className="divide-y divide-gray-200">
                {cartState.map((item, idx) => (
                    <li className="flex py-6" id={item.id}>
                        <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                            <img
                                src={item.imgSrc}
                                className="h-full w-full object-cover object-center"
                                alt={item.name}
                            />
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">
                                        {item.price.toLocaleString()}원
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between">
                                <div className="flex text-gray-500">
                                    <button
                                        className="decrease-btn"
                                        onClick={() => handleDecreaseClick(idx)}
                                    >
                                        -
                                    </button>
                                    <div className="mx-2 font-bold">
                                        {item.count}개
                                    </div>
                                    <button
                                        className="increase-btn"
                                        onClick={() => handleIncreaseClick(idx)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="font-medium text-sky-400 hover:text-sky-500"
                                    onClick={() => handleRemoveClick(idx)}
                                >
                                    <p className="remove-btn">삭제하기</p>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CartList;
