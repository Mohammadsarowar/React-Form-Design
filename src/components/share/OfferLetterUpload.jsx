import React from "react";
import { useForm } from "react-hook-form";

const OfferLetterUpload = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
        {/* ... (Previous fields) */}
     
      <div className="flex gap-2">
{/* Educational Qualifications */}
        <div className="mb-4 w-1/2">
          <label
            htmlFor="educationalQualifications"
            className="block text-sm font-medium text-gray-600"
          >
            Educational Qualifications
          </label>
          <input
            type="file"
            id="educationalQualifications"
            {...register("educationalQualifications")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Employee Photo */}
        <div className="mb-4 w-1/2">
          <label
            htmlFor="employeePhoto"
            className="block text-sm font-medium text-gray-600"
          >
            Employee Photo
          </label>
          <input
            type="file"
            id="employeePhoto"
            {...register("employeePhoto")}
            accept=".jpeg, .jpg, .png"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      </div>
        
       <div className="flex gap-2">
        {/* Signature Card */}
        <div className="mb-4">
          <label
            htmlFor="signatureCard"
            className="block text-sm font-medium text-gray-600"
          >
            Signature Card
          </label>
          <input
            type="file"
            id="signatureCard"
            {...register("signatureCard")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Signature Specimen */}
        <div className="mb-4">
          <label
            htmlFor="signatureSpecimen"
            className="block text-sm font-medium text-gray-600"
          >
            Signature Specimen
          </label>
          <input
            type="file"
            id="signatureSpecimen"
            {...register("signatureSpecimen")}
            accept=".jpeg, .jpg, .png"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
       </div>
        <div className="flex gap-2">
  {/* Experience Certificates */}
        <div className="mb-4">
          <label
            htmlFor="experienceCertificates"
            className="block text-sm font-medium text-gray-600"
          >
            Experience Certificates
          </label>
          <input
            type="file"
            id="experienceCertificates"
            {...register("experienceCertificates")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* CV */}
        <div className="mb-4">
          <label
            htmlFor="cv"
            className="block text-sm font-medium text-gray-600"
          >
            CV
          </label>
          <input
            type="file"
            id="cv"
            {...register("cv")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        </div>
        <div className="flex gap-2">

        </div>
        <div className="flex gap-2">
{/* Offer */}
        <div className="mb-4">
          <label
            htmlFor="offer"
            className="block text-sm font-medium text-gray-600"
          >
            Offer
          </label>
          <input
            type="file"
            id="offer"
            {...register("offer")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* Bank Account */}
        <div className="mb-4">
          <label
            htmlFor="bankAccount"
            className="block text-sm font-medium text-gray-600"
          >
            Bank Account
          </label>
          <input
            type="file"
            id="bankAccount"
            {...register("bankAccount")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
       
        </div>
       

        {/* National Address */}
        <div className="mb-4">
          <label
            htmlFor="nationalAddress"
            className="block text-sm font-medium text-gray-600"
          >
            National Address
          </label>
          <input
            type="file"
            id="nationalAddress"
            {...register("nationalAddress")}
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>

        {/* ... (Remaining fields) */}

    
      </form>
    </div>
  );
};

export default OfferLetterUpload;
