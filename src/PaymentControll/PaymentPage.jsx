import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PaymentPage() {
    const parcelId = useParams().parcelId;
    const navigate = useNavigate();
    console.log("Parcel ID:", parcelId);

    const [data, setData] = useState(null);

    useEffect(async () => {
        const response = await axios.get(`http://localhost:8050/api/parcel/${parcelId}`);
        setData(response?.data.data);
        console.log("Parcel Data:", response.data.data);
    }, [parcelId]);

    const paymentHandler = async () => {

        const response = await axios.post(
                `http://localhost:8050/api/payment/${parcelId}`,
            );
    
            console.log(response.data.url);
            window.location.replace(response.data.url);
            console.log(response);
    };

    return (
        <div className="w-full flex flex-col items-center">

            {/* Invoice header */}

            <div className="flex flex-col items-center justify-center h-[50px] w-full mb-8">
                <h1 className="text-3xl font-bold">Welcome To Infrared Payment System</h1>
            </div>

            {/* Invoice div */}

            <div className="flex flex-col items-center justify-center h-[400px] w-[500px] bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between w-full mb-4">
                    <div className="flex flex-col w-[45%] mb-4 text-2xl">
                        <p>Receiver's Name:</p>
                        <p>Receiver's Phone:</p>
                        <p>Receiver's Address:</p>
                        <p>Parcel:</p>
                        <p>Parcel's Price:</p>
                        <p>Delivery Charge:</p>
                        <p>Total Payment:</p>
                    </div>

                    <div className="flex flex-col w-[45%] mb-4 text-2xl">
                        <p>{data?.receiverName}</p>
                        <p>{data?.receiverPhone}</p>
                        <p>{data?.receiverAddress}</p>
                        <p>{data?.parcelDescription}</p>
                        <p>{data?.price}</p>
                        <p>{data?.deliveryCharge}</p>
                        <p>{data?.totalCharge}</p>
                    </div>
                </div>

                <button onClick={paymentHandler} className="flex justify-center items-center w-[200px] h-[50px] bg-blue-600 hover:bg-blue-200 hover:text-black rounded-md text-2xl text-white">Pay</button>
                
            </div>


        </div>
    );
}

export default PaymentPage;