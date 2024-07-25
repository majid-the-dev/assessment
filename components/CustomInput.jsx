import { Input } from "./ui/input";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";

const CustomInput = ({ control, name, label, placeholder }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1.5">
          <FormLabel className="text-sm text-[#475367] font-light">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="bg-white font-medium px-4 py-5 border border-[#D0D5DD] rounded-[6px] placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-light"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-[12px] text-red-500 mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
