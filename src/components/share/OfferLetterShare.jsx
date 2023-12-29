import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const OfferLetterShare = () => {
    const { handleSubmit, control, register } = useForm();
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
      const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
      };
    return (
        <div>
              <div className=" lg:col-span-2 container  rounded-md mt-2">
          <p className="text-center  mx-auto items-center font-mono text-teal-600 bg-white w-32 rounded-lg">
            Iqama Details{" "}
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto ">
      {/* Iqama Number */}
      <div className="mb-4">
        <label htmlFor="iqamaNumber" className="block text-sm font-medium text-gray-600">
          Iqama Number
        </label>
        <input
          type="text"
          id="iqamaNumber"
          {...register("iqamaNumber", { required: true, maxLength: 12 })}
          className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
        />
      </div>

      {/* Expiry Date */}
      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
          Expiry Date
        </label>
        <input
          type="date"
          id="expiryDate"
          {...register("expiryDate", { required: true })}
          className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
        />
      </div>

      {/* Iqama Issue Date */}
      <div className="mb-4">
        <label htmlFor="iqamaIssueDate" className="block text-sm font-medium text-gray-600">
          Iqama Issue Date
        </label>
        <input
          type="date"
          id="iqamaIssueDate"
          {...register("iqamaIssueDate", { required: true })}
          className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
        />
      </div>

      {/* Place of Issue */}
      <div className="mb-4">
        <label htmlFor="placeOfIssue" className="block text-sm font-medium text-gray-600">
          Place of Issue
        </label>
        <input
          type="text"
          id="placeOfIssue"
          {...register("placeOfIssue", { maxLength: 256 })}
          className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
        />
      </div>

      {/* Iqama Profession (Arabic) */}
      <div className="mb-4">
        <label htmlFor="iqamaProfessionArabic" className="block text-sm font-medium text-gray-600">
          Iqama Profession (Arabic)
        </label>
        <input
          type="text"
          id="iqamaProfessionArabic"
          {...register("iqamaProfessionArabic", { maxLength: 256 })}
          className="mt-1 p-2 min-w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
        />
      </div>
      <p className="text-center  mx-auto items-center font-mono text-teal-600 bg-white  rounded-lg">
      National Address Details{" "}
          </p>
 {/* Building Number */}
 <div className="mb-4">
          <label htmlFor="buildingNumber" className="block text-sm font-medium text-gray-600">
            Building Number
          </label>
          <input
            type="text"
            id="buildingNumber"
            {...register("buildingNumber", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Street name */}
        <div className="mb-4">
          <label htmlFor="streetName" className="block text-sm font-medium text-gray-600">
            Street Name
          </label>
          <input
            type="text"
            id="streetName"
            {...register("streetName", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* District */}
        <div className="mb-4">
          <label htmlFor="district" className="block text-sm font-medium text-gray-600">
            District
          </label>
          <input
            type="text"
            id="district"
            {...register("district", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Unit Number */}
        <div className="mb-4">
          <label htmlFor="unitNumber" className="block text-sm font-medium text-gray-600">
            Unit Number
          </label>
          <input
            type="text"
            id="unitNumber"
            {...register("unitNumber", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Postal Code */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-600">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            {...register("postalCode", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Wasel Number */}
        <div className="mb-4">
          <label htmlFor="waselNumber" className="block text-sm font-medium text-gray-600">
            Wasel Number
          </label>
          <input
            type="text"
            id="waselNumber"
            {...register("waselNumber", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-600">
            Country
          </label>
          <input
            type="text"
            id="country"
            {...register("country", { maxLength: 256 })}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
        <p className="text-center  mx-auto items-center font-mono text-teal-600 bg-white rounded-lg">
        Bank Account Information								
          </p>
         {/* IBAN No. */}
      <div className="mb-4">
        <label htmlFor="iban" className="block text-sm font-medium text-gray-600">
          IBAN No.
        </label>
        <input
          type="text"
          id="iban"
          {...register("iban", { maxLength: 30 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Bank Name */}
      <div className="mb-4">
        <label htmlFor="bankName" className="block text-sm font-medium text-gray-600">
          Bank Name
        </label>
        <input
          type="text"
          id="bankName"
          {...register("bankName", { maxLength: 30 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Bank Account Number */}
      <div className="mb-4">
        <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-600">
          Bank Account Number
        </label>
        <input
          type="text"
          id="bankAccountNumber"
          {...register("bankAccountNumber", { maxLength: 30 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Bank Code */}
      <div className="mb-4">
        <label htmlFor="bankCode" className="block text-sm font-medium text-gray-600">
          Bank Code
        </label>
        <input
          type="text"
          id="bankCode"
          {...register("bankCode", { maxLength: 30 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

    </form>
        </div>
        </div>
    );
};

export default OfferLetterShare;