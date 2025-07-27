function PaymentFailedPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-bold text-red-500">Payment Failed</h1>
            <p className="text-xl mt-4">Please try again later or contact support.</p>
            <p className="text-lg mt-2">If you have any questions, feel free to reach out to our support team.</p>
            <p className="text-lg mt-2">Thank you for your understanding!</p>
        </div>
    );
}

export default PaymentFailedPage;