const CartList = () => {
    return (
        <>
            <ul className="divide-y divide-gray-200">
                <li className="flex py-6" id="4">
                    <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                        <img
                            src="asset/salad.png"
                            className="h-full w-full object-cover object-center"
                            alt="안든든한 샐러드"
                        />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>안든든한 샐러드</h3>
                                <p className="ml-4">3,000원</p>
                            </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between">
                            <div className="flex text-gray-500">
                                <button className="decrease-btn">-</button>
                                <div className="mx-2 font-bold">1개</div>
                                <button className="increase-btn">+</button>
                            </div>
                            <button
                                type="button"
                                className="font-medium text-sky-400 hover:text-sky-500"
                            >
                                <p className="remove-btn">삭제하기</p>
                            </button>
                        </div>
                    </div>
                </li>
                <li className="flex py-6" id="3">
                    <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                        <img
                            src="asset/fries.png"
                            className="h-full w-full object-cover object-center"
                            alt="감자튀김"
                        />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>감자튀김</h3>
                                <p className="ml-4">1,500원</p>
                            </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between">
                            <div className="flex text-gray-500">
                                <button className="decrease-btn">-</button>
                                <div className="mx-2 font-bold">1개</div>
                                <button className="increase-btn">+</button>
                            </div>
                            <button
                                type="button"
                                className="font-medium text-sky-400 hover:text-sky-500"
                            >
                                <p className="remove-btn">삭제하기</p>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default CartList;
