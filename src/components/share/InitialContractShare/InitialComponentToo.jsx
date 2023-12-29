import React from "react";
import { useForm } from "react-hook-form";

const InitialComponentToo = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto ">
      {/* ... (Previous fields) */}

      {/* Pay ID */}
      <div className="mb-4">
        <label htmlFor="payId" className="block text-sm font-medium text-gray-600">
          Pay ID
        </label>
        <input
          type="text"
          id="payId"
          {...register("payId", { maxLength: 10 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Batch Group */}
      <div className="mb-4">
        <label htmlFor="batchGroup" className="block text-sm font-medium text-gray-600">
          Batch Group
        </label>
        <input
          type="text"
          id="batchGroup"
          {...register("batchGroup", { maxLength: 10 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Education */}
      <div className="mb-4">
        <label htmlFor="education" className="block text-sm font-medium text-gray-600">
          Education
        </label>
        <input
          type="text"
          id="education"
          {...register("education", { maxLength: 256 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Specialization */}
      <div className="mb-4">
        <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">
          Specialization
        </label>
        <input
          type="text"
          id="specialization"
          {...register("specialization", { maxLength: 256 })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* ... (Remaining fields) */}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default InitialComponentToo;
