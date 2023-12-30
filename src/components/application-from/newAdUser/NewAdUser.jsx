import React from "react";
import { useForm } from "react-hook-form";

const NewAdUser = () => {
  const { handleSubmit, register } = useForm();

  // Sample array of fields
  const fields = [
    "userName",
    "email",
    "alias",
    "displayName",
    "jobTitle",
    "description",
    "name",
    "lastName",
    "mobile",
    "office",
    "telephoneNo",
    "note",
    "company",
    "employeeId",
  ];

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" lg:ml-72 rounded-lg mx-auto p-6 bg-gray-200">
<p className="text-center mx-auto items-center mt-3 font-mono text-teal-600 bg-white w-44 rounded-lg">
          Display Only Data
          </p>
    <div className="grid grid-cols-3 gap-2 lg:ml-5">
      {fields.map((fieldName) => (
        <div key={fieldName} className="mb-4">
          <label htmlFor={fieldName} className="block text-sm font-medium text-gray-600">
            {fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to Title Case */}
          </label>
          <input
            type="text"
            id={fieldName}
            {...register(fieldName)}
            placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            className="mt-1 p-2 w-full px-4 py-3  text-gray-800 border border-teal-300 focus:outline-teal-600  rounded-md"
            readOnly
          />
        </div>
      ))}
    </div>
      

      {/* ... (Other fields or sections) */}

      {/* Submit Button */}
      <div className=" text-center">
              <button type="submit" class="group text-center relative inline-block focus:outline-none focus:ring" >
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-teal-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
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

export default NewAdUser;
