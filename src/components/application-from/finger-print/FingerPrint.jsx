import React from "react";
import { useForm } from "react-hook-form";

const FingerPrint = () => {
  const { handleSubmit, register } = useForm();
  const fields = ["schedule", "location",
    // Add other fields from Zk as needed
];
  // Sample array of fields from Zk
  const zkFields = [
    "schedule",
    "id",
    "firstName",
    "lastName",
    "gender",
    "department",
    "position",
    "employmentType",
    "employmentDate",
  ];

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:ml-72 rounded-lg bg-gray-300 m-5 px-5">
    <div className="grid grid-cols-3 gap-5 p-5 ">
    {fields.map((fieldName) => (
        <div key={fieldName} className=" ">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
       {zkFields.map((fieldName) => (
        <div key={fieldName} className=" ">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            defaultValue={`Value from Zk for ${fieldName}`} 
            readOnly
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border bg-white border-teal-300 focus:outline-teal-600  rounded-md"
          />
        </div>
      ))}
    </div>
    <div className=" text-center ">
     
      {/* Hover */}

<button  type="submit" className="group w-96 relative inline-block focus:outline-none focus:ring">
  <span
    className="absolute mb-5 inset-0 translate-x-0 translate-y-0 bg-teal-600 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    className="relative text-white  mb-5 inline-block w-96 border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
 submit
  </span>
</button>
    </div>
     

      {/* ... (Other fields or sections) */}

      {/* Submit Button */}
     
    </form>
  );
};

export default FingerPrint;
