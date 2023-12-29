import React from "react";
import { useForm } from "react-hook-form";

const InitalComponent = ({onSubmit,handleSubmit,register}) => {
 



  return (
    <div className="">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-2">
        {/* ... (Previous fields) */}

        {/* Contract Start Date */}
        <div className="mb-4">
          <label
            htmlFor="contractStartDate"
            className="block text-sm font-medium text-gray-600"
          >
            Contract Start Date
          </label>
          <input
            type="date"
            id="contractStartDate"
            {...register("contractStartDate", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Contract End Date */}
        <div className="mb-4">
          <label
            htmlFor="contractEndDate"
            className="block text-sm font-medium text-gray-600"
          >
            Contract End Date
          </label>
          <input
            type="date"
            id="contractEndDate"
            {...register("contractEndDate", { required: true })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Job Title */}
        <div className="mb-4">
          <label
            htmlFor="jobTitle"
            className="block text-sm font-medium text-gray-600"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            {...register("jobTitle", { maxLength: 256 })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Basic (B) */}
        <div className="mb-4">
          <label
            htmlFor="basic"
            className="block text-sm font-medium text-gray-600"
          >
            Basic (B)
          </label>
          <input
            type="text"
            id="basic"
            {...register("basic", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Housing (H) */}
        <div className="mb-4">
          <label
            htmlFor="housing"
            className="block text-sm font-medium text-gray-600"
          >
            Housing (H)
          </label>
          <input
            type="text"
            id="housing"
            {...register("housing", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Commission (C) */}
        <div className="mb-4">
          <label
            htmlFor="commission"
            className="block text-sm font-medium text-gray-600"
          >
            Commission (C)
          </label>
          <input
            type="text"
            id="commission"
            {...register("commission", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Overtime */}
        <div className="mb-4">
          <label
            htmlFor="overtime"
            className="block text-sm font-medium text-gray-600"
          >
            Overtime
          </label>
          <input
            type="text"
            id="overtime"
            {...register("overtime", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Food */}
        <div className="mb-4">
          <label
            htmlFor="food"
            className="block text-sm font-medium text-gray-600"
          >
            Food
          </label>
          <input
            type="text"
            id="food"
            {...register("food", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Transportation */}
        <div className="mb-4">
          <label
            htmlFor="transportation"
            className="block text-sm font-medium text-gray-600"
          >
            Transportation
          </label>
          <input
            type="text"
            id="transportation"
            {...register("transportation", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Medical */}
        <div className="mb-4">
          <label
            htmlFor="medical"
            className="block text-sm font-medium text-gray-600"
          >
            Medical
          </label>
          <input
            type="text"
            id="medical"
            {...register("medical", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Total Salary */}
        <div className="mb-4">
          <label
            htmlFor="totalSalary"
            className="block text-sm font-medium text-gray-600"
          >
            Total Salary
          </label>
          <input
            type="text"
            id="totalSalary"
            {...register("totalSalary", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Mobile */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusMobile"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Mobile
          </label>
          <input
            type="text"
            id="fixedBonusMobile"
            {...register("fixedBonusMobile", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Overtime */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusOvertime"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Overtime
          </label>
          <input
            type="text"
            id="fixedBonusOvertime"
            {...register("fixedBonusOvertime", {
              pattern: /^\d+(\.\d{1,2})?$/,
            })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Housing */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusHousing"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Housing
          </label>
          <input
            type="text"
            id="fixedBonusHousing"
            {...register("fixedBonusHousing", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Food */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusFood"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Food
          </label>
          <input
            type="text"
            id="fixedBonusFood"
            {...register("fixedBonusFood", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Transportation */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusTransportation"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Transportation
          </label>
          <input
            type="text"
            id="fixedBonusTransportation"
            {...register("fixedBonusTransportation", {
              pattern: /^\d+(\.\d{1,2})?$/,
            })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Medical */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusMedical"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Medical
          </label>
          <input
            type="text"
            id="fixedBonusMedical"
            {...register("fixedBonusMedical", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Others */}
        <div className="mb-4">
          <label
            htmlFor="fixedBonusOthers"
            className="block text-sm font-medium text-gray-600"
          >
            Fixed Bonus-Others
          </label>
          <input
            type="text"
            id="fixedBonusOthers"
            {...register("fixedBonusOthers", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Fixed Bonus-Total (Auto Calculated) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Fixed Bonus-Total (Auto Calculated)
          </label>
          <input
            type="text"
            value={56}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Ithafa - Automatic (Auto Calculated) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Ithafa - Automatic (Auto Calculated)
          </label>
          <input
            type="text"
            value={7}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Ithafa - Manual */}
        <div className="mb-4">
          <label
            htmlFor="ithafaManual"
            className="block text-sm font-medium text-gray-600"
          >
            Ithafa - Manual
          </label>
          <input
            type="text"
            id="ithafaManual"
            {...register("ithafaManual", { pattern: /^\d+(\.\d{1,2})?$/ })}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* ... (Remaining fields) */}
      <div className="mx-auto items-center justify-center text-center">
           {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 mx-auto items-center text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
     
      </form>
    </div>
  );
};

export default InitalComponent;
