import React, { useState } from 'react';

export const SubscribeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setIsLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_GOOGLE_FORM_URL, {
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ email: email }),
      });

      const result = await response.json();

      if (result.result === 'success') {
        setShowModal(true);
        setErrorMessage('');
        event.target.reset();
      } else {
        setErrorMessage(result.error || 'Subscription failed, please try again later.');
      }
    } catch (error) {
      setErrorMessage('Network error, please try again later.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="grow h-12 p-3 rounded-[5px] border border-white text-white text-base font-normal font-nunito bg-transparent"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`h-12 px-6 py-3 bg-white rounded-[5px] border border-white flex justify-center items-center hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? 'Submitting...' : 'Subscribe'}
          </button>
        </div>

        <div className="text-white text-base font-normal font-nunito">
          By subscribing you agree to our Privacy Policy and consent to receive updates from our company.
        </div>

        {errorMessage && (
          <div className="text-red-500 text-sm">
            {errorMessage}
          </div>
        )}
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4 font-elmessiri text-[#0d4e6e]">Subscription Successful!</h2>
            <p className="mb-4 font-nunito">Thank you for subscribing!
              <br />
              We will send the latest updates to your email.</p>
            <button
              onClick={closeModal}
              className="mt-2 px-4 py-2 bg-[#0d4e6e] text-white rounded hover:bg-[#0a3d56] hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};
