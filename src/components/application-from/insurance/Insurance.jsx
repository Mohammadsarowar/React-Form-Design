import React from "react";
import { useForm } from "react-hook-form";

const Insurance = () => {
  const { handleSubmit, register } = useForm();

  // Sample array of fields
  const fields = [
    "employeeId",
    "iqamaNo",
    "nameEnglish",
    "nameArabic",
    "dateOfBirth",
    "nationality",
    "mobile",
    "location",
  ];
  const data = [
    "effectiveDate",
    "expiryDate",
    "policyNo",
    "insuranceCompany",
    "insuranceClass",
  ];
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72  lg:mr-5 rounded-lg bg-gray-200">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 m-5 mt-5">
  <div className="mt-5">
  {data.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            {...register(fieldName)}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md"
          />
        </div>
      ))}
  </div>
  <div className="grid grid-cols-2 gap-2 mr-4 lg:col-span-2 mt-5">
     {fields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
          defaultValue={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            type="text"
            id={fieldName}
            {...register(fieldName)}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600 rounded-md0"
            readOnly
          />
        </div>
      ))}
  </div>
</div>
     

      {/* ... (Other fields or sections) */}

     {/* Submit Button */}
     <div className=" text-center mb-5">
              <button type="submit" class="group  text-center relative inline-block focus:outline-none focus:ring" >
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5  bg-teal-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
 Submit
  </span>
</button>
      </div>
    </form>
  );
};

export default Insurance;
