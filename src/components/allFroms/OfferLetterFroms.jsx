import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
const OfferLetterForms = () => {
  
  const { handleSubmit, control, register } = useForm();
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  useEffect(() => {
    // Fetch data from an API or any other source
    // For demonstration purposes, let's use a simple array
    const fetchData = async () => {
      const response = await fetch('/public/countrysName.json');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);
  

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };
  return (
    <div className=" lg:ml-72 lg:mr-5 lg:my-5 mg:ml-30 min-h-[calc(100vh-40px)]  flex flex-col  text-gray-800 rounded-xl bg-gray-200">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-8 ">
        <div className="m-3 lg:col-span-2 container px-4 sm:px-8 rounded-md">
          <p className="text-center mx-auto items-center font-mono text-teal-600 bg-white w-32 rounded-lg">Basic Details </p>
          <form onSubmit={handleSubmit(onSubmit)} className="font-serif rounded-lg ">
            {/* Applicant Details */}
            <div className="flex gap-2 ">
              <div className="mb-4 space-y-1 text-sm w-1/2">
                <label className="block font-medium text-gray-600">
                  Applicant ID
                </label>
                <input
                  type="number"
                  placeholder="Applicant ID"
                  {...register("applicantId", { required: true })}
                  className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                />
              </div>
              <div className="mb-4 space-y-1 text-sm  w-1/2">
              <label className="block font-medium text-gray-600">
                First Name English
              </label>
              <input
                type="text"
                {...register("firstNameEnglish", {
                  required: true,
                  maxLength: 256,
                })}
                className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
              />
            </div>
            </div>

        <div className="flex gap-2">
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
                Middle Name English
              </label>
              <input
                type="text"
                {...register("middleNameEnglish", { maxLength: 256 })}
                className="mmt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                placeholder=" Middle Name English"
              />
            </div>
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
              Thrid Name English
           
              </label>
              <input
              placeholder="Thrid Name English"
                type="text"
                {...register("ThridNameEnglish", { maxLength: 256 })}
                className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
              />
            </div>
        </div>
        <div className="flex gap-2">
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
              Fourth Name English

              </label>
              <input
                type="text"
                {...register("FourthNameEnglish", { maxLength: 256 })}
                className="mmt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                placeholder=" Fourth Name English"
              />
            </div>
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
              First Name Arabic
           
              </label>
              <input
              placeholder="First Name Arabic"
                type="text"
                {...register("FirstNameArabic", { maxLength: 256 })}
                className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
              />
            </div>
        </div>
        <div className="flex gap-2">
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
                Middle Name Arabic
              </label>
              <input
                type="text"
                {...register("middleNameArabic", { maxLength: 256 })}
                className="mmt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                placeholder=" Middle Name Arabic"
              />
            </div>
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
              Thrid Name Arabic
           
              </label>
              <input
              placeholder="Thrid Name Arabic"
                type="text"
                {...register("ThridNameArabic", { maxLength: 256 })}
                className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
              />
            </div>
        </div>
        <div className="flex gap-2">
               <div className="mb-4 space-y-1 text-sm w-1/2">
              <label className="block text-sm font-medium text-gray-600">
                Fourth Name Arabic
              </label>
              <input
                type="text"
                {...register("FourthNameEnglish", { maxLength: 256 })}
                className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
                placeholder="Fourth Name Arabic"
              />
            </div>
            
            <div className='space-y-1 text-sm w-1/2'>
              <label htmlFor='category' className='block text-gray-600'>
                Country
              </label>
              <select
                required
                className='mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md'
                name='country'
              >
                {data.map(country => (
                  <option value={country.label} key={country.code}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
        </div>

         <div className="flex gap-2">
         <div className="space-y-1 text-sm w-1/3">
          <label htmlFor='category' className='block text-gray-600'>
                Country
              </label>
         <select {...register("gender")}
         className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
         >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
         </div>
         <div className="space-y-1 text-sm w-1/3">
          <label htmlFor='category' className='block text-gray-600'>
                Country
              </label>
         <select {...register("gender")}
         className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
         >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
         </div>
         <div className="space-y-1 text-sm w-1/3">
          <label htmlFor="datePicker">Select a Date:</label>
          <input
            type="date"
            id="datePicker"
            name="selectedDate"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
          />
           {/* Display the selected date */}
     
        </div>

         
         </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Contact Details */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Mobile
              </label>
              <input
                type="text"
                {...register("mobile", { maxLength: 15 })}
                className="mt-1 p-2 border w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true, maxLength: 256 })}
                className="mt-1 p-2 border w-full"
              />
            </div>

            {/* Iqama Details */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Iqama Number
              </label>
              <input
                type="text"
                {...register("iqamaNumber", { maxLength: 12 })}
                className="mt-1 p-2 border w-full"
              />
            </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Contract Details */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Contract Duration
              </label>
              <input
                type="number"
                {...register("contractDuration", { required: true })}
                className="mt-1 p-2 border w-full"
              />
            </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Bank Account Information */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                IBAN No.
              </label>
              <input
                type="text"
                {...register("iban", { maxLength: 30 })}
                className="mt-1 p-2 border w-full"
              />
            </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Upload Documents */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Educational Qualifications
              </label>
              <input
                type="file"
                {...register("educationalQualifications")}
                className="mt-1"
              />
            </div>

            {/* Continue adding other fields based on the pattern above */}

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="location"
              id="location"
              type="text"
              placeholder="Location"
              required
            />
          </div>
        </div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};

export default OfferLetterForms;
